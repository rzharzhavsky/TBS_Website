'use client'

import {useState, useEffect, useCallback} from 'react'
import {useRouter} from 'next/navigation'
import {
  clearStoredGalleryToken,
  galleryAuthHeaders,
  getStoredGalleryToken,
} from '@/lib/gallery-admin-client'

interface GalleryPhoto {
  _id: string
  title: string
  imageUrl: string
  category: string
}

export default function GalleryAdmin() {
  const router = useRouter()
  const [sessionReady, setSessionReady] = useState(false)
  const [photos, setPhotos] = useState<GalleryPhoto[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Community')
  const [file, setFile] = useState<File | null>(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!getStoredGalleryToken()) {
      router.replace('/admin/gallery/login')
      return
    }
    setSessionReady(true)
  }, [router])

  const fetchPhotos = useCallback(async () => {
    setLoading(true)
    const res = await fetch('/api/gallery', {headers: galleryAuthHeaders()})
    if (res.status === 401) {
      clearStoredGalleryToken()
      router.push('/admin/gallery/login')
      return
    }
    const data = await res.json()
    setPhotos(Array.isArray(data) ? data : [])
    setLoading(false)
  }, [router])

  useEffect(() => {
    if (!sessionReady) return
    fetchPhotos()
  }, [sessionReady, fetchPhotos])

  function logout() {
    clearStoredGalleryToken()
    router.push('/admin/gallery/login')
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault()
    if (!file || !title) return

    setUploading(true)
    setMessage('')

    const formData = new FormData()
    formData.append('file', file)
    formData.append('title', title)
    formData.append('category', category)

    const res = await fetch('/api/gallery', {
      method: 'POST',
      headers: galleryAuthHeaders(),
      body: formData,
    })
    const text = await res.text()
    let data
    try {
      data = JSON.parse(text)
    } catch {
      data = {error: text || 'Server error'}
    }

    if (res.status === 401) {
      clearStoredGalleryToken()
      router.push('/admin/gallery/login')
      setUploading(false)
      return
    }

    if (data.success) {
      setMessage('Photo uploaded and published!')
      setTitle('')
      setCategory('Community')
      setFile(null)
      const input = document.getElementById('file-input') as HTMLInputElement
      if (input) input.value = ''
      fetchPhotos()
    } else {
      setMessage(data.error || 'Upload failed')
    }
    setUploading(false)
  }

  async function handleDelete(id: string, photoTitle: string) {
    if (!confirm(`Delete "${photoTitle}"?`)) return

    const res = await fetch('/api/gallery', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...galleryAuthHeaders(),
      },
      body: JSON.stringify({id}),
    })
    if (res.status === 401) {
      clearStoredGalleryToken()
      router.push('/admin/gallery/login')
      return
    }
    const data = await res.json()

    if (data.success) {
      setPhotos((prev) => prev.filter((p) => p._id !== id))
    } else {
      alert(data.error || 'Delete failed')
    }
  }

  if (!sessionReady) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-500">
        Checking session…
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Gallery Manager</h1>
          <button
            type="button"
            onClick={logout}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 underline"
          >
            Sign out
          </button>
        </div>

        <form onSubmit={handleUpload} className="bg-white rounded-xl p-6 shadow-sm border mb-10 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Upload New Photo</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Photo Name</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='e.g. "Purim 2024"'
              required
              className="w-full border rounded-lg px-3 py-2 text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-gray-900"
            >
              <option value="Shabbat">Shabbat</option>
              <option value="Holidays">Holidays</option>
              <option value="Music">Music</option>
              <option value="Community">Community</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Photo</label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              required
              className="w-full text-gray-900"
            />
          </div>

          <button
            type="submit"
            disabled={uploading || !file || !title}
            className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? 'Uploading...' : 'Upload & Publish'}
          </button>

          {message && (
            <p className={`text-sm font-medium ${message.includes('uploaded') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </form>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Published Photos ({photos.length})
          </h2>

          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : photos.length === 0 ? (
            <p className="text-gray-500">No photos uploaded yet.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {photos.map((photo) => (
                <div key={photo._id} className="bg-white rounded-xl overflow-hidden shadow-sm border group relative">
                  {photo.imageUrl && (
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  )}
                  <div className="p-3">
                    <p className="font-medium text-gray-900 text-sm">{photo.title}</p>
                    <p className="text-xs text-gray-500">{photo.category}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(photo._id, photo.title)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    title="Delete photo"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

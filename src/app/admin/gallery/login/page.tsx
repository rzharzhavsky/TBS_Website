'use client'

import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {setStoredGalleryToken} from '@/lib/gallery-admin-client'

export default function GalleryLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/gallery-auth', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({password}),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.success && typeof data.token === 'string') {
        setStoredGalleryToken(data.token)
        router.push('/admin/gallery')
        return
      }
      setError(data.error || 'Login failed')
    } catch {
      setError('Could not reach server')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md border p-8">
        <h1 className="text-xl font-bold text-gray-900 mb-1">Gallery admin</h1>
        <p className="text-sm text-gray-500 mb-6">Enter the password to manage photos.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="gallery-pw" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="gallery-pw"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="w-full border rounded-lg px-3 py-2 text-gray-900"
              required
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-tbs-blue-700 text-white font-semibold rounded-lg hover:bg-tbs-blue-800 disabled:opacity-50"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}

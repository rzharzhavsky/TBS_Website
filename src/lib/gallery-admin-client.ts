/** sessionStorage key for signed gallery admin token (no cookies). */
export const GALLERY_ADMIN_TOKEN_KEY = 'tbs_gallery_admin_token'

export function getStoredGalleryToken(): string | null {
  if (typeof window === 'undefined') return null
  return sessionStorage.getItem(GALLERY_ADMIN_TOKEN_KEY)
}

export function setStoredGalleryToken(token: string): void {
  sessionStorage.setItem(GALLERY_ADMIN_TOKEN_KEY, token)
}

export function clearStoredGalleryToken(): void {
  sessionStorage.removeItem(GALLERY_ADMIN_TOKEN_KEY)
}

export function galleryAuthHeaders(): HeadersInit {
  const token = getStoredGalleryToken()
  return token ? {Authorization: `Bearer ${token}`} : {}
}

export const TOKEN = 'blog_user_token'

export function setToken(newToken: string | null) {
  if (newToken) {
    sessionStorage.setItem(TOKEN, newToken)
  }
}

export function delToken() {
  sessionStorage.removeItem(TOKEN)
}

export function getToken() {
  return sessionStorage.getItem(TOKEN)
}

export function isValidToken(): boolean {
  const token = sessionStorage.getItem(TOKEN)
  return token ? Boolean(!hasExpired(token)) : false
}

function hasExpired(token: string) {
  const temp1 = atob(token.split('.')[1])
  const expData = JSON.parse(temp1).exp
  return Boolean(Date.now() > expData * 1000)
}

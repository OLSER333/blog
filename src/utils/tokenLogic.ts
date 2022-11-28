export const TOKEN = 'blog_user_token'

export function setToken(newToken: any) {
  sessionStorage.setItem(TOKEN, newToken)
}

export function delToken() {
  sessionStorage.removeItem(TOKEN)
}

export function getToken() {
  return sessionStorage.getItem(TOKEN)
}

export function isValidToken(): boolean {
  const token = sessionStorage.getItem(TOKEN)
  console.log(token)
  return token ? Boolean(!hasExpired(token)) : false
}

function hasExpired(token: string) {
  const temp1 = atob(token.split('.')[1])
  const expData = JSON.parse(temp1).exp
  // console.log('temp1', temp1)
  // console.log('expData', expData)
  // console.log('answ', Boolean(Date.now() > expData * 1000))
  // console.log('when expData', expData, new Date(expData * 1000))
  return Boolean(Date.now() > expData * 1000)
}

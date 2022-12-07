export interface IErrorUserData {
  data: {
    errors: Ierror
  }
  status: string
}

interface Ierror {
  email?: string
  username?: string
}

export default function getErrorTxt(error: IErrorUserData) {
  const errors = Object.entries(error.data.errors)
  return `${errors[0][0]} ${errors[0][1]}`
}

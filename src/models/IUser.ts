export interface IUserSignUp {
  user: {
    email: string
    username: string
    password: string
  }
}

export interface IUserSignIn {
  user: {
    email: string
    password: string
  }
}

export interface IUser {
  email: string | null
  username: string | null
  token: string | null
  bio?: string | null
  image?: string | null
}

export interface IUserUpdateResponce {
  user: {
    email: string
    username: string
    token: string
    bio?: string
    image?: string
  }
}

export interface IUserUpdate {
  user: {
    email: string
    username: string
    password: string
    image: string
    bio?: string
  }
}

export interface IUserSignInResponce {
  user: IUser
}
export interface IResponceError {
  errors: {
    body: string[]
  }
}

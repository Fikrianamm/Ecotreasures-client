interface IUserRegister {
    name: string
    email: string
    password: string
}

interface IUserUpdate {
    name?: string
    email?: string
    password?: string
}

interface IUserLogin {
    email: string
    password:string
}

export type {
    IUserRegister,
    IUserUpdate,
    IUserLogin
}
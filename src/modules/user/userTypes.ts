export type createUserProps = {
    firstname?: string,
    lastname?: string,
    username: string,
    email: string,
    password: string,
}

export type loginUserProps = {
    email: string,
    password: string,
}
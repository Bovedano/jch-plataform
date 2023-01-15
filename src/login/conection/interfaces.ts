

export interface LoginData {
    tk : string
}

export interface ConectionAdapter {
    login : () => LoginData,
}


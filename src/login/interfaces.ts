interface LoginConfigPages {
    login? : JSX.Element,
}

export interface LoginConfig {
    pages : LoginConfigPages
}

export interface LoginInfo {
    username : string,
    role : string,
    language : string,
    config : object,
}

interface FomrData {
    k : string, 
    v : string,
    e? : string
}

interface Form {
    form :  FomrData[],
    name : string
}

export interface Forms {
    forms : Form[],
}

export enum LoginDirection {
    LOGED = "LOGED",
    LOGIN = "LOGIN",
    REGISTRATION = "REGISTRATION",
    FORGOT_PASSWORD = "FORGOT_PASSWORD",
    VALIDATE_PASSWORD = "VALIDATE_PASSWORD",
    TERMS = "TERMS",
    WORKING = "WORKING",
    BACK = "BACK",
    ERROR = "ERROR",
    EXTRA1 = "EXTRA1",
    EXTRA2 = "EXTRA2",
    EXTRA3 = "EXTRA3",
    EXTRA4 = "EXTRA4",
    EXTRA5 = "EXTRA5",
}

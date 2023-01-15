import { useLogin } from "../../../hooks/useLogin"
import { LoginDirection } from "../interfaces";
import { ConectionAdapter, LoginData } from "./interfaces"

export const demoAdapter : ConectionAdapter = {
    login: function (): LoginData {
        const {setLoginDirection} = useLogin();
        setLoginDirection(LoginDirection.WORKING);

        
        return ({tk : ""})
    }

}
import { SimpleLoginLink } from "../../compositors/navigation/SimpleLoginLink/SimpleLoginLink"
import { LoginDirection } from "../../interfaces"

export const TermsAndConditionsPage = () => {
    return <SimpleLoginLink label={"Terminos y condiciones"} direction={LoginDirection.BACK} />
}
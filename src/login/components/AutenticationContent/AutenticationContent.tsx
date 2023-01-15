import { useLogin } from "../../../../hooks/useLogin"
import { LoginDirection } from "../../interfaces";
import { ForgotPasswordPage } from "../../pages/ForgotPasswordPage/ForgotPasswordPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";
import { TermsAndConditionsPage } from "../../pages/TermsAndConditionsPage/TermsAndConditionsPage";
import { WorkingPage } from "../../pages/WorkingPage/WorkingPage";


interface AutenticationContentProps {
    children: JSX.Element | JSX.Element[],
}

export const AutenticationContent = (props: AutenticationContentProps) => {

    const { loginDirection } = useLogin();

    switch (loginDirection) {
        case LoginDirection.LOGED:
            return <>{props.children}</>
        case LoginDirection.REGISTRATION:
            return <RegisterPage></RegisterPage>
        case LoginDirection.FORGOT_PASSWORD:
            return <ForgotPasswordPage></ForgotPasswordPage>
        case LoginDirection.TERMS:
            return <TermsAndConditionsPage></TermsAndConditionsPage>
        case LoginDirection.WORKING:
            return <WorkingPage></WorkingPage>
        default:
            return <LoginPage></LoginPage>
    }

}

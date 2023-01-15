import { Header } from "semantic-ui-react"
import { Spacer } from "../../../Atomics/Spacer/Spacer"
import { CenteredFormLayout } from "../../compositors/layouts/CenteredFormLayout/CenteredFormLayout"
import { SimpleInput } from "../../compositors/forms/Inputs/SimpleInput/SimpleInput"
import { SimpleCheckBox } from "../../compositors/forms/CheckBoxes/SimpleCheckBox/SimpleCheckBox"
import { SimpleButton } from "../../compositors/forms/Buttons/SimpleButton/SimpleButton"
import { SimpleLoginLink } from "../../compositors/navigation/SimpleLoginLink/SimpleLoginLink"
import { LoginDirection } from "../../interfaces"

export const ForgotPasswordPage = () => {
    return (
        <CenteredFormLayout width={300}>
            <Spacer size={50} ></Spacer>
            <Header color="purple" size='large'>Recuperar contraseña</Header>
            <Spacer size={15} ></Spacer>
            <SimpleInput data="mail" placeholder="Email de recuperación" icon="mail" form="register" />
            <Spacer size={20} ></Spacer>
            <SimpleButton label="Recuperar" color="purple" form="register" />
            <Spacer size={20} ></Spacer>
            <div className={""}>
                <SimpleLoginLink color="blue" label={"Acceder"} direction={LoginDirection.LOGIN} />
            </div>
        </CenteredFormLayout>
    )
}
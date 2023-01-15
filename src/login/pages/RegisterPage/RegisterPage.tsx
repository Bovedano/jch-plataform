import { Header } from "semantic-ui-react"
import { Spacer } from "../../../Atomics/Spacer/Spacer"
import { CenteredFormLayout } from "../../compositors/layouts/CenteredFormLayout/CenteredFormLayout"
import { SimpleLoginLink } from "../../compositors/navigation/SimpleLoginLink/SimpleLoginLink"
import { LoginDirection } from "../../interfaces"
import { SimpleInput } from "../../compositors/forms/Inputs/SimpleInput/SimpleInput"
import { SimpleCheckBox } from "../../compositors/forms/CheckBoxes/SimpleCheckBox/SimpleCheckBox"
import { SimpleButton } from "../../compositors/forms/Buttons/SimpleButton/SimpleButton"

export const RegisterPage = () => {
    return (
        <CenteredFormLayout width={300}>
            <Spacer size={50} ></Spacer>
            <Header color="purple" size='large'>Register</Header>
            <Spacer size={15} ></Spacer>
            <SimpleInput data="user" placeholder="Usuario" icon="user" form="register" />
            <Spacer size={15} ></Spacer>
            <SimpleInput data="mail" placeholder="Email" icon="mail" form="register" />
            <Spacer size={10} ></Spacer>
            <SimpleInput crypt data="password" placeholder="Contraseña" icon="lock" form="register" />
            <Spacer size={10} ></Spacer>
            <SimpleInput crypt data="re_password" placeholder="Repetir contraseña" icon="lock" form="register" />
            <Spacer size={20} ></Spacer>
            <SimpleCheckBox label="Acepto los terminos y condiciones" data="aceptedTerms" form="register" />
            <Spacer size={10} ></Spacer>
            <SimpleLoginLink label={"Terminos y condiciones"} direction={LoginDirection.TERMS} />
            <Spacer size={20} ></Spacer>
            <SimpleButton label="Iniciar sesión" color="purple" form="register" />
            <Spacer size={20} ></Spacer>
            <div className={""}>
                <SimpleLoginLink color="blue" label={"Ya estoy registrado"} direction={LoginDirection.LOGIN} />
            </div>
        </CenteredFormLayout>
    )
}
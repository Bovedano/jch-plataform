import { Header } from "semantic-ui-react";
import { Spacer } from "../../../Atomics/Spacer/Spacer";
import { SimpleButton } from "../../compositors/forms/Buttons/SimpleButton/SimpleButton";
import { SimpleCheckBox } from "../../compositors/forms/CheckBoxes/SimpleCheckBox/SimpleCheckBox";
import { SimpleInput } from "../../compositors/forms/Inputs/SimpleInput/SimpleInput";
import { SimpleLoginLink } from "../../compositors/navigation/SimpleLoginLink/SimpleLoginLink";
import styles from './LoginPage.module.css'
import { LoginDirection } from "../../interfaces";
import { CenteredFormLayout } from "../../compositors/layouts/CenteredFormLayout/CenteredFormLayout";
import { Validation } from "../../../Commons/Utils/Validators/interfaces";

export const LoginPage = () => {

    const userValidations: Validation[] = [];
    userValidations.push({
        validator: () => { return "" },
        error: ""
    })


    return (
        <CenteredFormLayout width={300}>
            <Spacer size={50} ></Spacer>
            <Header color="purple" size='large'>Login</Header>
            <Spacer size={15} ></Spacer>
            <SimpleInput data="user" placeholder="Usuario" icon="user" form="login" />
            <Spacer size={10} ></Spacer>
            <SimpleInput crypt data="password" placeholder="Contraseña" icon="lock" form="login" />
            <Spacer size={20} ></Spacer>
            <SimpleCheckBox label="Recuerdame" data="rememberlogin" form="login" />
            <Spacer size={20} ></Spacer>
            <SimpleButton label="Iniciar sesión" color="purple" form="login" />
            <Spacer size={20} ></Spacer>
            <div className={styles.login_links_container}>
                <SimpleLoginLink color="blue" label={"¿Nuevo usuario?"} direction={LoginDirection.REGISTRATION} />
                <SimpleLoginLink label={"¿Olvidó su contraseña?"} direction={LoginDirection.FORGOT_PASSWORD} />
            </div>
        </CenteredFormLayout>
    );
}
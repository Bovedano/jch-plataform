import React from 'react'
import { SimpleButton } from "../../compositors/forms/Buttons/SimpleButton/SimpleButton";
import { SimpleCheckBox } from "../../compositors/forms/CheckBoxes/SimpleCheckBox/SimpleCheckBox";
import { SimpleInput } from "../../compositors/forms/Inputs/SimpleInput/SimpleInput";
import { SimpleLoginLink } from "../../compositors/navigation/SimpleLoginLink/SimpleLoginLink";
import { LoginDirection } from "../../interfaces";
import { CenteredFormLayout } from "../../compositors/layouts/CenteredFormLayout/CenteredFormLayout";
import { Space } from '../../../comcomponents/Space/Space';

export const LoginPage = () => {

    return (
        <CenteredFormLayout width={300}>
            <Space size={50} ></Space>
            <h1>Login</h1>
            <Space size={15} ></Space>
            <SimpleInput data="user" placeholder="Usuario" icon="user" form="login" />
            <Space size={10} ></Space>
            <SimpleInput crypt data="password" placeholder="Contraseña" icon="lock" form="login" />
            <Space size={20} ></Space>
            <SimpleCheckBox label="Recuerdame" data="rememberlogin" form="login" />
            <Space size={20} ></Space>
            <SimpleButton label="Iniciar sesión" color="purple" form="login" />
            <Space size={20} ></Space>
            <div>
                <SimpleLoginLink color="blue" label={"¿Nuevo usuario?"} direction={LoginDirection.REGISTRATION} />
                <SimpleLoginLink label={"¿Olvidó su contraseña?"} direction={LoginDirection.FORGOT_PASSWORD} />
            </div>
        </CenteredFormLayout>
    );
}
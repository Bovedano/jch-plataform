import React from 'react'

import { CenteredFormLayout } from "../../compositors/layouts/CenteredFormLayout/CenteredFormLayout"
import { SimpleLoginLink } from "../../compositors/navigation/SimpleLoginLink/SimpleLoginLink"
import { LoginDirection } from "../../interfaces"
import { LoginInput } from "../../compositors/forms/Inputs/LoginInput/LoginInput"
import { SimpleCheckBox } from "../../compositors/forms/CheckBoxes/SimpleCheckBox/SimpleCheckBox"
import { SimpleButton } from "../../compositors/forms/Buttons/SimpleButton/SimpleButton"
import { Space } from '../../../comcomponents/Space/Space'

export const RegisterPage = () => {
    return (
        <CenteredFormLayout width={300}>
            <Space size={50} ></Space>
            <h1>Register</h1>
            <Space size={15} ></Space>
            <LoginInput data="user" placeholder="Usuario" icon="user" target="register" />
            <Space size={15} ></Space>
            <LoginInput data="mail" placeholder="Email" icon="mail" target="register" />
            <Space size={10} ></Space>
            <LoginInput crypt data="password" placeholder="Contraseña" icon="lock" target="register" />
            <Space size={10} ></Space>
            <LoginInput crypt data="re_password" placeholder="Repetir contraseña" icon="lock" target="register" />
            <Space size={20} ></Space>
            <SimpleCheckBox label="Acepto los terminos y condiciones" data="aceptedTerms" form="register" />
            <Space size={10} ></Space>
            <SimpleLoginLink label={"Terminos y condiciones"} direction={LoginDirection.TERMS} />
            <Space size={20} ></Space>
            <SimpleButton label="Iniciar sesión" color="purple" form="register" />
            <Space size={20} ></Space>
            <div className={""}>
                <SimpleLoginLink color="blue" label={"Ya estoy registrado"} direction={LoginDirection.LOGIN} />
            </div>
        </CenteredFormLayout>
    )
}
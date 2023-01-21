import React from 'react'

import { CenteredFormLayout } from "../../compositors/layouts/CenteredFormLayout/CenteredFormLayout"
import { SimpleLoginLink } from "../../compositors/navigation/SimpleLoginLink/SimpleLoginLink"
import { LoginDirection } from "../../interfaces"
import { SimpleInput } from "../../compositors/forms/Inputs/SimpleInput/SimpleInput"
import { SimpleCheckBox } from "../../compositors/forms/CheckBoxes/SimpleCheckBox/SimpleCheckBox"
import { SimpleButton } from "../../compositors/forms/Buttons/SimpleButton/SimpleButton"
import { Space } from '../../../comcomponents/Space/Space'

export const RegisterPage = () => {
    return (
        <CenteredFormLayout width={300}>
            <Space size={50} ></Space>
            <h1>Register</h1>
            <Space size={15} ></Space>
            <SimpleInput data="user" placeholder="Usuario" icon="user" form="register" />
            <Space size={15} ></Space>
            <SimpleInput data="mail" placeholder="Email" icon="mail" form="register" />
            <Space size={10} ></Space>
            <SimpleInput crypt data="password" placeholder="Contraseña" icon="lock" form="register" />
            <Space size={10} ></Space>
            <SimpleInput crypt data="re_password" placeholder="Repetir contraseña" icon="lock" form="register" />
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
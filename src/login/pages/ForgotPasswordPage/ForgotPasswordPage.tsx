import React from 'react'

import { CenteredFormLayout } from "../../compositors/layouts/CenteredFormLayout/CenteredFormLayout"
import { LoginInput } from "../../compositors/forms/Inputs/LoginInput/LoginInput"
import { SimpleButton } from "../../compositors/forms/Buttons/SimpleButton/SimpleButton"
import { SimpleLoginLink } from "../../compositors/navigation/SimpleLoginLink/SimpleLoginLink"
import { LoginDirection } from "../../interfaces"
import { Space } from "../../../comcomponents/Space/Space"

export const ForgotPasswordPage = () => {
    return (
        <CenteredFormLayout width={300}>
            <Space size={50} ></Space>
            <h1>Recuperar contraseña</h1>
            <Space size={15} ></Space>
            <LoginInput data="mail" placeholder="Email de recuperación" icon="mail" target="register" />
            <Space size={20} ></Space>
            <SimpleButton label="Recuperar" color="purple" form="register" />
            <Space size={20} ></Space>
            <div className={""}>
                <SimpleLoginLink color="blue" label={"Acceder"} direction={LoginDirection.LOGIN} />
            </div>
        </CenteredFormLayout>
    )
}
import React from 'react'
import { CenteredFormLayout } from "../../compositors/layouts/CenteredFormLayout/CenteredFormLayout"
import { Space } from '../../../comcomponents/Space/Space'


export const WorkingPage = () => {
    return (
        <CenteredFormLayout width={1}>
            <Space size={200} ></Space>
            <>Cargando...</>
        </CenteredFormLayout>
    )
}
import React from "react"

interface StyledFormProps {
    children?: JSX.Element | JSX.Element[]
}

export const StyledForm = (props: StyledFormProps) => {

    return <div>{props.children}</div>
}

StyledForm.defaultProps = {
    children: <>StyledForm</>
}
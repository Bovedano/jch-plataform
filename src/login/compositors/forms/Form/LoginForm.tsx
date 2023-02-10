import React, { KeyboardEvent } from "react"

interface LoginFormItem extends JSX.Element {
    target?: string,
}

interface LoginFormProps {
    children: LoginFormItem[]
    className?: string
}

export const LoginForm = (props: LoginFormProps) => {
    const style: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        width: "100%"
    }

    const keyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        console.log("Key press")
        if (e.key == "Enter") {
            console.log("Ennter");
            // put the login here
        }
    }


    const mapChilds = props.children.map(child => {
        if (child.target) {
            return <><child.type
                target={child.target}
                {...child.props}
            /></>
        }
        return <>{child}</>
    })
    return <div style={style} className={"login_form " + props.className || ""} onKeyUpCapture={keyPress}>
        {mapChilds}
    </div>
}

LoginForm.defaultProps = {
    children: <>LoginForm</>
}
import { SemanticCOLORS } from "semantic-ui-react"
import { useLogin } from "../../../../../hooks/useLogin"
import { LoginDirection } from "../../../interfaces";

interface SimpleLoginLinkProps {
    label: string,
    direction: LoginDirection,
    color?: SemanticCOLORS,
}
export const SimpleLoginLink = (props: SimpleLoginLinkProps) => {

    const { setLoginDirection } = useLogin();

    const style = {
        color: props.color,
        cursor: "pointer",
        textDecoration: "underline"
    }

    const onClickHandler = () => {
        setLoginDirection(props.direction)
    }

    return <div style={style} onClick={onClickHandler}>{props.label}</div>
}
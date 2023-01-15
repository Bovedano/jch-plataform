import styles from './CenteredFormLayout.module.css'

interface CenteredFormLayoutProps {
    children: JSX.Element | JSX.Element[],
    width?: number
}

export const CenteredFormLayout = (props: CenteredFormLayoutProps) => {

    const style = { width: "" }

    if (props.width) {
        style.width = props.width + "px"
    }

    return (
        <div className={styles.login_external_container}>
            <div style={style} className={styles.login_internal_container}>
                {props.children}
            </div>
        </div>
    )
}
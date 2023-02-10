import React from "react"
import { Grid, Icon, SemanticICONS } from "semantic-ui-react"
import { CText } from "../../../comcomponents/CText/CText"
import { CButton } from "../../../comcomponents/CButton/CButton"
import { IntersticialBox } from "../IntersticialBox/InterstticialBox"
import { PromptButton } from "../../hooks/usePrompt"

interface PromptSimpleMessageProps {
    text?: string,
    icon?: SemanticICONS,
    boxed?: boolean,
    children?: JSX.Element | JSX.Element[],
    buttons?: PromptButton[]
}

export const PromptSimpleMessage = (props: PromptSimpleMessageProps) => {
    console.log(props)

    const boxed = typeof props.boxed !== "undefined" && props.boxed

    const onHand = (btn: PromptButton, ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        ev.preventDefault();
        if (btn.fnc) {
            console.log("Close " + props.text)
            btn.fnc();
        }
    }

    return (
        <IntersticialBox active={boxed}>
            <Grid
                centered
            >
                <Grid.Row>
                    {props.icon ? <Icon name={props.icon} size="huge" /> : <></>}
                </Grid.Row>
                <Grid.Row>
                    <CText text={props.text}></CText>
                </Grid.Row>
                <Grid.Row>
                    {props.buttons ? props.buttons.map((button, index) => {
                        return <CButton key={"prompt_button_" + index} onClick={button.fnc ? (ev) => { onHand(button, ev) } : () => { }} basic={!boxed}><CText text={button.text || ""}></CText></CButton>
                    }) : <></>}
                </Grid.Row>
            </Grid >
        </IntersticialBox>
    );
}

PromptSimpleMessage.defaultProps = {
    children: <>PromptSimpleMessage</>
}
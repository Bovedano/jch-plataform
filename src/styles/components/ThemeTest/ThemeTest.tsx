import React from "react"

import { CText } from "../../../comcomponents/CText/CText";
import { CInput } from "../../../comcomponents/CInput/CInput";
import { CButton } from "../../../comcomponents/CButton/CButton";
import { ThemeComponent } from "../ThemeComponent/ThemeComponent";
import { CDropdown } from "../../../comcomponents/CDropdown/CDropdown";
import { usePrompt } from "../../../prompts/hooks/usePrompt";

interface ThemeTestProps {
    theme: string
}

export const ThemeTest = (props: ThemeTestProps) => {
    return <div>ThemeTest {props.theme}
        <Test theme={props.theme} ></Test>
        <Test theme={props.theme} contrast></Test>

    </div>
}

interface TestProps {
    contrast?: boolean,
    theme: string
}

const Test = (props: TestProps) => {
    const { message, close } = usePrompt();

    const testcombo = [
        {
            key: "key1",
            text: "Dark",
            value: "dark",
        },
        {
            key: "key2",
            text: "Default",
            value: "default",
        }
    ]

    return <ThemeComponent id="header" contrast={props.contrast}><div>
        <CText text="Prueba texto"></CText>
        <CText text="Prueba texto" contrast></CText>
        <CInput size="mini"></CInput>
        <CInput size="mini" texterror="Error de prueba"></CInput>
        <CInput contrast></CInput>
        <CButton onClick={() => {
            message("MEnsaje prueba 1")
        }}>Open</CButton>
        <CButton onClick={() => {
            close()
        }}>Close</CButton>
        <CDropdown
            selection
            value="dark"
            options={testcombo}
        ></CDropdown>
    </div></ThemeComponent>
}

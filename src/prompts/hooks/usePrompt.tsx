import React from "react";
import { usePrompter } from "../context/usePrompter";
import { SemanticICONS } from "semantic-ui-react";
import { PresetConfirmation } from "../components/presets/PresetConfirmation/PresetConfirmation";

export interface PromptButton {
    text: string,
    fnc?: () => void
}


export const usePrompt = () => {
    const { open, close } = usePrompter();

    console.log("UsePrompt", "Update Prmopt")
    const message = (message_text: string, button_text?: string, icon?: SemanticICONS) => {

        open(
            <PresetConfirmation
                message_text={message_text}
                button_text={button_text}
                icon={icon}
            ></PresetConfirmation>,
            {})
    }

    const value = {
        message,
        close
    }

    return value;
} 
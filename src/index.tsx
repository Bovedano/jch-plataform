//Plataform
export * from "./plataform/context/PlataformContext"
export * from "./plataform/context/usePlataformContext"
export * from "./plataform/JCHPlataform/interfaces"
export * from "./plataform/context/JCHPlataform"

//Layouts
export * from "./layouts/components/DivisorLayout/DivisorLayout"
export * from "./layouts/components/PageLayout/PageLayout"
export * from "./layouts/components/CenterLayout/CenterLayout"

//Responsive
export * from "./responsive/hooks/useDeviceIdentifier"
export * from "./responsive/hooks/useDeviceCondition"
export * from "./responsive/components/ResponsiveComponent/ResponsiveComponent"

//Menu
export * from "./menu/interfaces"
export * from "./menu/hooks/useMenu"

export * from "./menu/presets/SideMenuElegant2/ImpMenu/SideMenuElegant2"

//Language


//Login
export * from "./login/components/AutenticationContent/AutenticationContent"
export * from "./login/interfaces"


//Dates

//Componentes comunes (Espaciadores, Scrolls, etc)
export * from "./comcomponents/Lipsum/Lipsum"
export * from "./comcomponents/CText/CText"

//Styles, utilidades para estilos
export * from "./styles/hooks/useMergeCSS"
export * from "./styles/hooks/useSeleccionableStyle"
export * from "./styles/context/useTheme"
export * from "./styles/components/ThemeComponent/ThemeComponent"
export * from "./styles/components/SeleccionableLayout/SeleccionableLayout"
export * from "./styles/components/ThemeTest/ThemeTest"

//Utils
export * from "./utils/hooks/useList"
export * from "./utils/hooks/useForm"

//Prompts
export * from "./prompts/context/usePrompter"
export * from "./prompts/hooks/usePrompt"
export * from "./prompts/components/PromptSimpleMessage/PromptSimpleMessage"
import { useTheme } from "../context/useTheme";

export const processErrorContrast = (customClass?: string, className?: string, error?: boolean, contrast?: boolean) => {
    let finalClassName = customClass ? customClass : "";
    if (className) {
        finalClassName = finalClassName + " " + className;
    }
    if (error) {
        finalClassName = finalClassName + " error"
    }
    if (contrast) {
        finalClassName = finalClassName + " contrast"
    }
    return finalClassName;
}

export const themedProcessErrorContrast = (customClass?: string, className?: string, error?: boolean, contrast?: boolean, id?: string) => {
    const { addThemeClass } = useTheme();
    const finalClassName = processErrorContrast(customClass, className, error, contrast);
    return addThemeClass(finalClassName, id);
}
export const useColors = () => {

    const defaultPaleta = () => {
        c1: "purple"
    }

    const configPaleta = new Map<string, string>();


    const getColor = (id: string) => {
        if (id in defaultPaleta) {
            return
        }
        const entrie = Object.entries(defaultPaleta).filter(entrie => entrie[0] === id);
        if (entrie) {
            return entrie[1];
        }
        return "transparent"
    }

    const c = getColor;

    return { c, getColor }
}

const c1 = ""
const c2 = ""

const themes = {
    default: {
        header: {
            backgroundColor: c1,
            color: c2
        }
    },
    dark: {

    }

}
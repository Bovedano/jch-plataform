
/*
export interface MergeCSSProps {
    propsCSS?: React.CSSProperties,
    defaultCSS?: React.CSSProperties,
    conditionalCSS?: conditionalCSS[]
}
*/

type ConditionalCSS = [boolean, React.CSSProperties, React.CSSProperties] | [boolean, React.CSSProperties];
type MergeCSSProp = React.CSSProperties | ConditionalsCSS | undefined
export type ConditionalsCSS = ConditionalCSS[]
type MergeCSSProps = MergeCSSProp[]


export const useMergeCSS = (styles: MergeCSSProps) => {

    let style: React.CSSProperties = {}

    styles.forEach(st => {
        if (st) {
            if (st instanceof Array) {
                //Por cada css condicional se coloca su estilo si se cumple la condicion
                //Si no se cumple la condicion se coloca su no estilo
                //Si no tiene no estilo no se coloca nada
                st.forEach(condCss => {
                    if (condCss[0]) {
                        style = { ...style, ...condCss[1] }
                    } else {
                        if (condCss.length > 2) {
                            style = { ...style, ...condCss[2] }
                        }
                    }
                });
            } else {
                style = { ...style, ...st }
            }
        }
    });

    return style
}

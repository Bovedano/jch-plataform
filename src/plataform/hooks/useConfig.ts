import { usePlataformContext } from "../context/usePlataformContext"

//Hook mas comodo para obtener la configuracion
export const useConfig = () => {
    return usePlataformContext();
}
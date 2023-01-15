import { Loader } from "semantic-ui-react"
import { CenteredFormLayout } from "../../compositors/layouts/CenteredFormLayout/CenteredFormLayout"
import { Spacer } from "../../../Atomics/Spacer/Spacer"

export const WorkingPage = () => {
    return (
        <CenteredFormLayout width={1}>
            <Spacer size={200} ></Spacer>
            <Loader active centered inline size={"large"} color={"pulrple"} />
        </CenteredFormLayout>
    )
}
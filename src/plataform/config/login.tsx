import React from "react";
import { LoginConfig } from "../../login/interfaces";
import { RegisterPage } from "../../login/pages/RegisterPage/RegisterPage";
import { LoginPage } from "../../login/pages/LoginPage/LoginPage";
import { ForgotPasswordPage } from "../../login/pages/ForgotPasswordPage/ForgotPasswordPage";
import { TermsAndConditionsPage } from "../../login/pages/TermsAndConditionsPage/TermsAndConditionsPage";
import { WorkingPage } from "../../login/pages/WorkingPage/WorkingPage";


export const config: LoginConfig = {
    pages: {
        login: <LoginPage></LoginPage>,
        registration: <RegisterPage></RegisterPage>,
        forgot_password: <ForgotPasswordPage></ForgotPasswordPage>,
        terms_and_conditions: <TermsAndConditionsPage></TermsAndConditionsPage>,
        loading_page: <WorkingPage></WorkingPage>
    }
}


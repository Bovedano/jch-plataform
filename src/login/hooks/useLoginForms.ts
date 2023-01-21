import { useState } from "react";
import { Forms } from "../interfaces";

export const useLoginForms = () => {
    const [forms, setFomrs] = useState<Forms>({ forms: [] });

    const splitForms = (f: string) => {
        const searchForm = forms.forms.filter(form => {
            return form.name === f;
        })

        const otherForms = forms.forms.filter(form => {
            return form.name !== f;
        })

        if (searchForm.length <= 0) {
            searchForm.push({ form: [], name: f })
        }

        return {
            searchForm: searchForm[0],
            otherForms
        }
    }

    const setFomrData = (k: string, v: string, f: string) => {

        const splitedForms = splitForms(f);
        const formfilter = splitedForms.searchForm.form.filter(fdata => {
            return fdata.k !== k
        })

        formfilter.push({ k: k, v: v })
        splitedForms.searchForm.form = formfilter;
        console.log(splitedForms)

        setFomrs({ forms: [...splitedForms.otherForms, splitedForms.searchForm] })
    }

    const submitForm = (form: string) => {
        alert(JSON.stringify(form))
    }

    return {
        setFomrData,
        submitForm
    }
}
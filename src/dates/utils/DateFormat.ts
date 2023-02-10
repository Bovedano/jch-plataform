
interface Options {
    fillWithZeros?: boolean,
    bracesFormat?: boolean,
}


const get_ddd = (date: Date, options: Options) => {
    const start = new Date(date.getFullYear())
    console.log(date);
    console.log(options)
    console.log(start)
}

const condResize = (str: string, n: number, options?: Options) => {
    let toBeResize = true;
    if (options && (typeof options.fillWithZeros !== "undefined" || options.fillWithZeros == false)) {
        toBeResize = false;
    }
    if (toBeResize) {
        return resize(str, n, "0")
    }
    return str;
}

const resize = (str: string, n: number, fill: string) => {
    if (str.length < n) {
        for (let i = 0; i < str.length; i++) {
            str = fill + str;
        }
    }
    if (str.length > n) {
        return str.substring(0, n)
    }
    return str;
}
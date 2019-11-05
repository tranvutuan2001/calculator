function before(s, i) {
    while (i >= 0) {
        i--
        if (isOperator(s[i]) || isBracket(s[i])) {
            return i
        }
    }
    return -1
}

function after(s, i) {
    while (i < s.length) {
        i++
        if (isOperator(s[i]) || isBracket(s[i])) {
            return i
        }
    }
    return s.length
}

function isCorrectParenthese(s) {
    let pString = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === ")") {
            pString = pString + s[i]
        }
    }
    let ltr = 0
    let rtl = 0
    for (let i = 0; i < pString.length; i++) {
        if (ltr < 0) {
            return false
        }
        if (pString[i] === "(") {
            ltr++
        } else {
            ltr--
        }
    }
    for (let i = pString.length - 1; i >= 0; i--) {
        if (rtl < 0) {
            return false
        }
        if (pString[i] === ")") {
            rtl++
        } else {
            rtl--
        }
    }
    if (ltr < 0 || rtl < 0) {
        return false
    }
    return true
}

function isBracket(symbol) {
    return (symbol === "(" || symbol === ")")
}


function isNumber(n) {
    let reg = new RegExp('((^\\d+$)|(^\\d\.\\d+$)|(^-\\d+$)|(^-\\d\.\\d+$))|(^\\(((\\d+)|(\\d+.\\d+)|(-\\d+)|(-\\d+.\\d+))\\)$)')
    return reg.test(n)
}

function isOperator(symbol) {
    return (symbol === "*" || symbol === "+" || symbol === "/" || symbol === "^" || symbol === "r")
}

function isCorrectForm(s) {
    try {
        if (!isCorrectParenthese(s)) {
            throw new Error("Wrong parenthese format")
        }
        let hasOperator = false
        for (let i = 0; i < s.length; i++) {
            if (isOperator(s[i])) {
                hasOperator = true
                let b = before(s, i)
                let a = after(s, i)
                if (b === i - 1) {
                    if (s[b] !== ")" && s[i] !== "r") {
                        throw new Error("Wrong operator format 1")
                    }
                } else {
                    if (!isNumber(s.slice(b + 1, i))) {
                        throw new Error("Wrong operator format 3")
                    }
                }
                if (a === i + 1 ) {
                    if (s[a] !== "(" &&  s[a] !== "r") {
                        throw new Error("Wrong operator format 2")
                    }
                } else {
                    if (!isNumber(s.slice(i + 1, a))) {
                        throw new Error("Wrong operator format 4")
                    }
                }
            }
        }
        if(!hasOperator){
            if(!isNumber(s.slice(0))){
                throw new Error("Not a number")
            }
        }
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

module.exports = {
    isCorrectForm,
    isOperator,
    before,
    after,
}

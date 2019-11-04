const checker = require('./checker')
const isCorrectForm = checker.isCorrectForm
const isOperator = checker.isOperator
const before = checker.before
const after = checker.after

// this function find the close bracket for the first open bracket in the math operation
function findClosingBracket(s) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            count++
        }
        if (s[i] === ")") {
            count--
            if (count === 0) {
                return i
            }
        }
    }
    return -1
}

function hasParenthese(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === ")") {
            return true
        }
    }
    return false
}

function hasPower(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "^") {
            return true
        }
    }
    return false
}

function hasMultiply(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "*" || s[i] === "/") {
            return true
        }
    }
    return false
}

function hasAddition(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "+") {
            return true
        }
    }
    return false
}

// Assume there is no bracket in s. This function calculate all the power operator in s
function removePower(s) {
    while (hasPower(s)) {
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "^") {
                let b = before(s, i)
                let a = after(s, i)
                let x = Math.pow(parseFloat(s.slice(b + 1, i)), parseFloat(s.slice(i + 1, a)))
                s = s.slice(0, b + 1) + x.toString() + s.slice(a)
            }
        }
    }
    return s
}

// Assume there is no bracket, and no power in s. This function calculate all the multiply and division operator in s
function removeMultiply(s) {
    while (hasMultiply(s)) {
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "*") {
                let b = before(s, i)
                let a = after(s, i)
                let x = parseFloat(s.slice(b + 1, i)) * parseFloat(s.slice(i + 1, a))
                s = s.slice(0, b + 1) + x.toString() + s.slice(a)
            } else if (s[i] === "/") {
                let b = before(s, i)
                let a = after(s, i)
                let x = parseFloat(s.slice(b + 1, i)) / parseFloat(s.slice(i + 1, a))
                s = s.slice(0, b + 1) + x.toString() + s.slice(a)
            }
        }
    }
    return s
}

// Assume there is no bracket, and no power and no multiply in s. This function calculate all the addition operator in s
function removeAddition(s) {
    while (hasAddition(s)) {
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "+") {
                let b = before(s, i)
                let a = after(s, i)
                let x = parseFloat(s.slice(b + 1, i)) + parseFloat(s.slice(i + 1, a))
                s = s.slice(0, b + 1) + x.toString() + s.slice(a)
            }
        }
    }
    return s
}

function removeParenthese(s) {
    try {
        for (let i = 0; i < s.length; i++) {
            if(s[i] === "-" && !isOperator(s[i-1])){
                s = s.slice(0,i) + "+" + s.slice(i)
            }
        }
        if (!isCorrectForm(s)) {
            throw new Error("Wrong Format")
        }

        while (hasParenthese(s)) {
            for (let i = 0; i < s.length; i++) {
                if (s[i] === "(") {
                    let c = findClosingBracket(s)
                    let x = removeParenthese(s.slice(i + 1, c))
                    s = s.slice(0, i) + x + s.slice(c + 1)
                }
            }
        }
        s = removePower(s)
        s = removeMultiply(s)
        s = removeAddition(s)
        return s
    } catch (err) {
        return err
    }
}

module.exports = {
    removeParenthese
}
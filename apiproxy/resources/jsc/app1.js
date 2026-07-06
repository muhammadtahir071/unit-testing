// app1.js
// JavaScript callout used for common parameter validation:
// mandatory-field checks, max-length checks, and regex/type checks.

function checkIsMandatory(paramName, paramValue) {
    if (paramValue === undefined || paramValue === null || paramValue === '') {
        return false;
    }
    return true;
}

function checkMaxLength(paramName, paramValue, maxLimit) {
    if (paramValue) {
        if (paramValue.length > maxLimit) {
            return false;
        }
    }
}

function checkRegx(paramName, paramValue, type) {
    if (!paramValue) {
        return undefined;
    }

    var regex;
    switch (type) {
        case 'N': // Numeric only
            regex = /^[0-9]+$/;
            break;
        case 'AN': // Alphanumeric only
            regex = /^[a-zA-Z0-9]+$/;
            break;
        case 'Email':
            regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            break;
        case 'MobileNo':
            regex = /^[0-9]{10}$/;
            break;
        default:
            return undefined;
    }

    if (!regex.test(paramValue)) {
        return false;
    }
    return true;
}
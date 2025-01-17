export function hasMinimumLength(password) {
        return password.length >= 8;
    }

export function hasSpecialCharacter(password) {
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharPattern.test(password);
}

export function hasDigit(password) {
    const digitPattern = /\d/;
    return digitPattern.test(password);
}

export function doesNotContainIPL(password) {
    const iplPattern = /ipl/i;
    return !iplPattern.test(password);
}

export function isPasswordValid(password) {
    return hasMinimumLength(password) &&
           hasSpecialCharacter(password) &&
           hasDigit(password) &&
           doesNotContainIPL(password);
}
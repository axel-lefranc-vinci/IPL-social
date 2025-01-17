export function hasMinimumLength(password) {
        return password.length >= 8;
    }

export function hasSpecialCharacter(password) {
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharPattern.test(password);
}

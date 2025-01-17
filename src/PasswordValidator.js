export class PasswordValidator {
    hasMinimumLength(password) {
        return password.length >= 8;
    }
}

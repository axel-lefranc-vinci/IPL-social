import { PasswordValidator } from '../src/PasswordValidator.js';

describe('PasswordValidator', () => {
    let validator;

    beforeEach(() => {
        validator = new PasswordValidator();
    });

    it('should return true for passwords with at least 8 characters', () => {
        expect(validator.hasMinimumLength('12345678')).toBe(true);
    });

    it('should return false for passwords shorter than 8 characters', () => {
        expect(validator.hasMinimumLength('12345')).toBe(false);
    });
});

import { hasMinimumLength,
    hasSpecialCharacter,
    hasDigit } from '../src/passwordChecker.js';

describe('hasMinimumLength', () => {
    it('should return true for passwords with at least 8 characters', () => {
        expect(hasMinimumLength('12345678')).toBe(true);
        expect(hasMinimumLength('abcdefgh')).toBe(true);
    });

    it('should return false for passwords shorter than 8 characters', () => {
        expect(hasMinimumLength('12345')).toBe(false);
        expect(hasMinimumLength('abcde')).toBe(false);
    });

});

describe('hasSpecialCharacter', () => {
    it('should return true for passwords with at least one special character', () => {
        expect(hasSpecialCharacter('abc!')).toBe(true);
        expect(hasSpecialCharacter('Password123@')).toBe(true);
    });

    it('should return false for passwords without special characters', () => {
        expect(hasSpecialCharacter('abc123')).toBe(false);
        expect(hasSpecialCharacter('Password')).toBe(false);
    });
});

describe('hasDigit', () => {
    it('should return true for passwords with at least one digit', () => {
        expect(hasDigit('abc1')).toBe(true);
        expect(hasDigit('Password123')).toBe(true);
    });

    it('should return false for passwords without digits', () => {
        expect(hasDigit('abc!')).toBe(false);
        expect(hasDigit('Password!')).toBe(false);
    });
});


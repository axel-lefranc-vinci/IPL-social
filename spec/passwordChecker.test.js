import { hasMinimumLength,
        hasSpecialCharacter,
        hasDigit,
        doesNotContainIPL,
        isPasswordValid } from '../src/passwordChecker.js';

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


describe('doesNotContainIPL', () => {
    it('should return true for passwords that do not contain "IPL"', () => {
        expect(doesNotContainIPL('Valid123!')).toBe(true);
        expect(doesNotContainIPL('Password123!')).toBe(true);
    });

    it('should return false for passwords containing "IPL"', () => {
        expect(doesNotContainIPL('IPLpassword')).toBe(false);
        expect(doesNotContainIPL('iplpassword')).toBe(false);
        expect(doesNotContainIPL('IPLPASSWORD')).toBe(false);
    });
});

describe('isPasswordValid', () => {
    it('should return true for a valid password', () => {
        expect(isPasswordValid('Valid123!')).toBe(true);
        expect(isPasswordValid('StrongPassword123!')).toBe(true);
    });
    it('should return false for an invalid password', () => {
        expect(isPasswordValid('short')).toBe(false);
        expect(isPasswordValid('password')).toBe(false);
        expect(isPasswordValid('password123')).toBe(false);
        expect(isPasswordValid('password!')).toBe(false);
        expect(isPasswordValid('password123!ipl')).toBe(false);
    });
});



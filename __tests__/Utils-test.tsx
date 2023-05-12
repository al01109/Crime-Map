import {formatName, formatDate} from '../src/utils/stringFormatter';

describe('Utility Functions', () => {
  describe('formatName', () => {
    it('should correctly format a single-word name', () => {
      expect(formatName('john')).toBe('John');
    });

    it('should correctly format a multi-word name', () => {
      expect(formatName('john-doe')).toBe('John Doe');
    });

    it('should handle empty string', () => {
      expect(formatName('')).toBe('');
    });
  });

  describe('formatDate', () => {
    it('should correctly format a valid date', () => {
      expect(formatDate('2023-05')).toBe('May 2023');
    });

    it('should correctly format a date with January', () => {
      expect(formatDate('2023-01')).toBe('January 2023');
    });

    it('should correctly format a date with December', () => {
      expect(formatDate('2023-12')).toBe('December 2023');
    });

    it('should handle invalid dates gracefully', () => {
      expect(formatDate('2023-13')).toBeUndefined();
      expect(formatDate('2023-00')).toBeUndefined();
    });
  });
});

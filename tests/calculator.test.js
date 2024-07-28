const StringCalculator = require('../src/calculator');

describe('StringCalculator', () => {
  it('should return 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('')).toBe(0);
  });

  it('should return the number itself for a single number', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1')).toBe(1);
    expect(calculator.add('2')).toBe(2);
  });

  it('should return the sum of two comma-separated numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1,0')).toBe(1);
  });

  it('should return the sum of two comma-separated numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1,2')).toBe(3);
  });

  it('should return the sum of multiple comma-separated numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1,2,3,4')).toBe(10);
  });

  it('should handle new lines as delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1\n2,3')).toBe(6);
  });
  
  it('should handle single delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1,2,3;')).toBe(6);
  });

  it('should handle multiple delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('//;\n1;2')).toBe(3);
  });

  it('should throw an error for negative numbers', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add('1,-2')).toThrow('negative numbers not allowed: -2');
  });

  it('should throw an error for negative numbers with delimiters', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add('-1;-2;3')).toThrow('negative numbers not allowed: -1, -2');
  });

  it('should return the sum of two numbers if equal to 1000', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1000,2')).toBe(1002);
  });

  it('should ignore numbers greater than 1000', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1001,2')).toBe(2);
  });
});

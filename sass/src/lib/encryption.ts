/**
 * Field Encoding Utilities
 * Provides Base64 encoding for sensitive fields (password, verification code)
 * during transmission from frontend to backend.
 */

export function encryptField(plaintext: string): string {
  try {
    const utf8Bytes = new TextEncoder().encode(plaintext);
    return btoa(String.fromCharCode(...utf8Bytes));
  } catch (error) {
    console.error('Field encoding failed:', error);
    throw new Error('Encoding failed. Please check your input.');
  }
}

export function encryptPassword(password: string): string {
  return encryptField(password);
}

export function encryptVerificationCode(code: string): string {
  return encryptField(code);
}

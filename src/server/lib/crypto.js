import crypto from "crypto";

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12;
const KEY_LENGTH = 32;

// MUST be 32 bytes
const SECRET_KEY = crypto
  .createHash("sha256")
  .update(process.env.ENCRYPT_SECRET)
  .digest()
  .slice(0, KEY_LENGTH);

export function encrypt(text) {
  if (!text) throw new Error("Nothing to encrypt");

  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, SECRET_KEY, iv);

  const encrypted = Buffer.concat([
    cipher.update(text, "utf8"),
    cipher.final()
  ]);

  const authTag = cipher.getAuthTag();

  return Buffer.concat([iv, authTag, encrypted]).toString("base64");
}

export function decrypt(encryptedText) {
  if (!encryptedText) throw new Error("Nothing to decrypt");

  const buffer = Buffer.from(encryptedText, "base64");

  const iv = buffer.slice(0, IV_LENGTH);
  const authTag = buffer.slice(IV_LENGTH, IV_LENGTH + 16);
  const encrypted = buffer.slice(IV_LENGTH + 16);

  const decipher = crypto.createDecipheriv(ALGORITHM, SECRET_KEY, iv);
  decipher.setAuthTag(authTag);

  const decrypted = Buffer.concat([
    decipher.update(encrypted),
    decipher.final()
  ]);

  return decrypted.toString("utf8");
}

export function encryptionTemplate(): string {
  return [
    "use aes_gcm::{Aes256Gcm, Key, Nonce};",
    "use aes_gcm::aead::{Aead, KeyInit};",
    "",
    "let key = Key::<Aes256Gcm>::from_slice(&[0u8; 32]);",
    "let cipher = Aes256Gcm::new(key);",
    "let nonce = Nonce::from_slice(&[0u8; 12]);",
    "let ciphertext = cipher.encrypt(nonce, b\"secret\".as_ref())?;",
    "",
    "println!(\"{}\", ciphertext.len());"
  ].join("\n");
}

export function encryptionTemplate(): string {
  return [
    "-module(enc_demo).",
    "-export([run/0]).",
    "run() ->",
    "  Key = crypto:strong_rand_bytes(32),",
    "  Iv = crypto:strong_rand_bytes(12),",
    "  {Cipher, Tag} = crypto:crypto_one_time_aead(aes_256_gcm, Key, Iv, <<\"secret\">>, <<>>, true),",
    "  io:format(\"~p~n\", [{Cipher, Tag}])."
  ].join("\n");
}

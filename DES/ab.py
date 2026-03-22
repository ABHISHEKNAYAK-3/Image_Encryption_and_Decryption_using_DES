from Crypto.Cipher import DES
from Crypto.Util.Padding import pad, unpad
from PIL import Image
import numpy as np

# ================= IMAGE → BYTES =================
def image_to_bytes(image_path):
    img = Image.open(image_path).convert("RGB")
    img_data = np.array(img)
    byte_data = img_data.tobytes()
    return img_data.shape, byte_data


# ================= BYTES → IMAGE =================
def bytes_to_image(byte_data, shape, output_path):
    array = np.frombuffer(byte_data, dtype=np.uint8).reshape(shape)
    img = Image.fromarray(array)
    img.save(output_path)


# ================= ENCRYPT =================
def encrypt_image(image_path, key, enc_file_path):
    shape, byte_data = image_to_bytes(image_path)

    # Pad data to multiple of 8 bytes
    padded_data = pad(byte_data, 8)

    cipher = DES.new(key, DES.MODE_ECB)
    encrypted_data = cipher.encrypt(padded_data)

    # Save encrypted file
    with open(enc_file_path, 'wb') as f:
        f.write(encrypted_data)

    print("✅ Encrypted data saved to:", enc_file_path)
    return shape


# ================= DECRYPT =================
def decrypt_image(enc_file_path, key, shape, output_path):
    with open(enc_file_path, 'rb') as f:
        encrypted_data = f.read()

    cipher = DES.new(key, DES.MODE_ECB)
    decrypted_padded = cipher.decrypt(encrypted_data)

    # Remove padding
    decrypted_data = unpad(decrypted_padded, 8)

    # Convert back to image
    bytes_to_image(decrypted_data, shape, output_path)

    print("✅ Decrypted image saved to:", output_path)


# ================= MAIN =================
def main():
    original_img_path = input("Enter original image name (e.g., input.jpg): ")
    decrypted_img_path = input("Enter decrypted image name (e.g., output.jpg): ")

    encrypted_file_path = "encrypted.bin"

    key = b'samplek1'  # MUST be exactly 8 bytes for DES

    # Encrypt
    shape = encrypt_image(original_img_path, key, encrypted_file_path)

    # Decrypt
    decrypt_image(encrypted_file_path, key, shape, decrypted_img_path)

    # ================= VALIDATION =================
    orig = np.array(Image.open(original_img_path).convert("RGB"))
    dec = np.array(Image.open(decrypted_img_path).convert("RGB"))

    if np.array_equal(orig, dec):
        print("🎉 Success: Decrypted image matches original!")
    else:
        print("⚠️ Warning: Images do not match!")


# Run program
if __name__ == "__main__":
    main()
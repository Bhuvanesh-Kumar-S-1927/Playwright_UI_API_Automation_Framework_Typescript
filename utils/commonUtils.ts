import CryptoJS from 'crypto-js';

export default class CommonUtils {
  private readonly secretKey: string;

  constructor() {
    const key = process.env.SECRET_KEY;

    if (!key) {
      throw new Error(
        'SECRET_KEY is not defined. Please provide it while starting execution.'
      );
    }

    this.secretKey = key;
  }

  /**
   * Encrypts data
   */
  public encryptData(data: string): string {
    const encryptedData = CryptoJS.AES.encrypt(
      data,
      this.secretKey
    ).toString();
    console.log(encryptedData);

    return encryptedData;
  }

  /**
   * Decrypts data
   */
  public decryptData(encData: string): string {
    const bytes = CryptoJS.AES.decrypt(encData, this.secretKey);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    if (!decryptedData) {
      throw new Error('Decryption failed. Invalid key or corrupted data.');
    }
    //console.log(decryptedData);
    return decryptedData;
  }
}

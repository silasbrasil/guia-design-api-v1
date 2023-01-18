export class Base64Encoder {
  private buffer: Buffer;

  constructor(value: string) {
    this.buffer = Buffer.from(value);
  }

  get value() {
    return this.buffer.toString('base64');
  }
}

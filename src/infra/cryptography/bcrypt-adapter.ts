import { HashComparer, Hasher } from "../../data/protocols/cryptography";

import bcrypt from 'bcrypt';

export class BcryptAdapter implements Hasher ,HashComparer {
    constructor(private readonly salt: number) {}

    async hash(plaintext: string): Promise<string> {
        return  await bcrypt.hash(plaintext, this.salt);
    }

    async compare(plaintext: string, digest: string): Promise<boolean> {
        return bcrypt.compare(plaintext, digest);
    }
}
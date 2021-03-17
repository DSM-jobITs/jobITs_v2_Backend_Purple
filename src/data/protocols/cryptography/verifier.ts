import { JwtAdapter } from "../../../infra/cryptography";

export interface Verifier {
    verify: (ciphertext: string) => Promise<JwtAdapter.Result>
}

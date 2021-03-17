import { JwtAdapter } from "../../../infra/cryptography";

export interface Encrypter {
    encrypt: (jwtAdapterParams: JwtAdapter.Params) => Promise<string>;
}

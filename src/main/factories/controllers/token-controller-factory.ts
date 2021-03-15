import { TokenController } from "../../../presentation/controller";
import { Controller } from "../../../presentation/protocols";
import { makeDbTokenAuthentication } from "../usecases";

export const makeTokenController = (): Controller => {
    return new TokenController(makeDbTokenAuthentication());
}
import { InfoController } from "../../../presentation/controller/info-controller";
import { Controller } from "../../../presentation/protocols";
import { makeDbLoadUserById } from "../usecases";

export const makeInfoController = (): Controller => {
    return new InfoController(makeDbLoadUserById()); 
}
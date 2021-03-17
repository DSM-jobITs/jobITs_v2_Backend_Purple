import { RecruitBasicController } from "../../../presentation/controller";
import { Controller } from "../../../presentation/protocols";
import { makeDbLoadSimpleEnterprises } from "../usecases";

export const makeRecruitBasicController = (): Controller => {
    return new RecruitBasicController(makeDbLoadSimpleEnterprises());
}

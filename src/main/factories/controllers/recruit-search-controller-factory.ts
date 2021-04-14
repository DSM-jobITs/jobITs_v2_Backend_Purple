import { RecruitSearchController } from "../../../presentation/controller";
import { Controller } from "../../../presentation/protocols";
import { makeDbLoadRecruitResults } from "../usecases";

export const makeRecruitSearchController = (): Controller => {
    return new RecruitSearchController(makeDbLoadRecruitResults());
}

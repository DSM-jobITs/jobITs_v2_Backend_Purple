import { DbLoadRecruitResults } from "../../../data/usecases";
import { LoadRecruitResults } from "../../../domain/usecases";
import { RecruitRepository } from "../../../infra/db/repositories"

export const makeDbLoadRecruitResults = (): LoadRecruitResults => {
    const recruitRepository = new RecruitRepository();
    return new DbLoadRecruitResults(recruitRepository);
}
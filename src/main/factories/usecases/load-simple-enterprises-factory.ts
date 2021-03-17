import { DbLoadSimpleEnterprises } from "../../../data/usecases";
import { LoadSimpleEnterprises } from "../../../domain/usecases";
import { RecruitRepository } from "../../../infra/db/repositories";

export const makeDbLoadSimpleEnterprises = (): LoadSimpleEnterprises => {
    const recruitRepository = new RecruitRepository();
    return new DbLoadSimpleEnterprises(recruitRepository);
}
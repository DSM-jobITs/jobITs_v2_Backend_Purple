import { DbLoadHomeNotices } from "../../../data/usecases";
import { LoadHomeNotices } from "../../../domain/usecases";
import { RecruitRepository } from "../../../infra/db/repositories";

export const makeDbLoadHomeNotices = ():LoadHomeNotices => {
    const recruitRepository = new RecruitRepository();
    return new DbLoadHomeNotices(recruitRepository);
}
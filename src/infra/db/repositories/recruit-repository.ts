import { EntityRepository, getRepository } from "typeorm";
import { LoadSimpleEnterprisesRepository } from "../../../data/protocols/repository/recruit";
import { Recruit } from "../entities";

@EntityRepository(Recruit)
export class RecruitRepository implements LoadSimpleEnterprisesRepository {
    async load(): Promise<LoadSimpleEnterprisesRepository.Result> {
        return await getRepository(Recruit)
            .createQueryBuilder('recruit')
            .innerJoin('enterprise', 'enterprise', 'recruit.ent_no = enterprise.ent_no')
            .innerJoin('qualification', 'qualification', 'recruit.recruit_id = qualification.recruit_id')
            .innerJoin('specialty', 'specialty', 'qualification.qualification_id = specialty.qualification_id')
            .select(['recruit.recruit_id', 'enterprise.introduce', 'enterprise.name', 'specialty.specialty', 'recruit.deadline'])
            .orderBy('recruit.reception', 'DESC')
            .getRawMany();
    }
}

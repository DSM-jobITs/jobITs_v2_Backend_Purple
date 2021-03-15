import { EntityRepository, getRepository } from "typeorm";
import { LoadUserByEmailRepository } from "../../../data/protocols/repository";
import { User } from "../entities";

@EntityRepository(User)
export class UserRepository implements LoadUserByEmailRepository{
    async loadById(id: string): Promise<LoadUserByEmailRepository.Result> {
        return await getRepository(User)
            .createQueryBuilder('user')
            .where('user.id = :id', { id })
            .getOne();
    }
}

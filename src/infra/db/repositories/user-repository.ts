import { EntityRepository, getRepository } from "typeorm";
import { LoadUserByEmailRepository, UpdateUserPassowrdRepository } from "../../../data/protocols/repository";
import { User } from "../entities";

@EntityRepository(User)
export class UserRepository implements LoadUserByEmailRepository, UpdateUserPassowrdRepository{
    async loadById(id: string): Promise<LoadUserByEmailRepository.Result> {
        return await getRepository(User)
            .createQueryBuilder('user')
            .where('user.id = :id', { id })
            .getOne();
    }

    async updatePassword(id: string, password: string): Promise<any> {
        return await getRepository(User)
            .createQueryBuilder('user')
            .update(User)
            .set({
                password
            })
            .where('user.id = :id', { id })
            .execute();
    }
}

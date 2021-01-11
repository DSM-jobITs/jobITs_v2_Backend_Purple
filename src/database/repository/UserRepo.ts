import { getConnection, getRepository } from 'typeorm';
import { User } from "../entity/user";

export class UserRepository {
    public static async findById(id: string): Promise<User> {
        return await getRepository(User)
            .createQueryBuilder('user')
            .where('user.id = :id',{ id })
            .getOne();
    }
};


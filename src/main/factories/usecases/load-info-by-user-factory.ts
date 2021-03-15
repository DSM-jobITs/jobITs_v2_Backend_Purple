import { DbLoadUserById } from "../../../data/usecases";
import { LoadUserById } from "../../../domain/usecases";
import { UserRepository } from "../../../infra/db/repositories";

export const makeDbLoadUserById = ():LoadUserById  => {
    const userRepository = new UserRepository();
    return new DbLoadUserById(userRepository);
}
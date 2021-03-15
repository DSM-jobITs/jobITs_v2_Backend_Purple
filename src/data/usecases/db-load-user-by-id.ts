import { LoadUserById } from "../../domain/usecases";
import { UserNotFoundError } from "../../presentation/errors";
import { notFound } from "../../presentation/helpers";
import { LoadUserByEmailRepository } from "../protocols/repository";

export class DbLoadUserById implements LoadUserById{
    constructor(private readonly loadUserByIdRepository: LoadUserByEmailRepository ) {}
    async load(id: string): Promise<LoadUserByEmailRepository.Result> {
        const user = await this.loadUserByIdRepository.loadById(id);
        if(user) {
            return user;
        }
        return { error: notFound(new UserNotFoundError()) };
    }
}

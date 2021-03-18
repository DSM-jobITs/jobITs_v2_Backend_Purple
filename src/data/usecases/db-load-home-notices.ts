import { LoadHomeNotices } from "../../domain/usecases";
import { RecruitRepository } from "../../infra/db/repositories";
import { NoListError, ServerError } from "../../presentation/errors";

export class DbLoadHomeNotices implements LoadHomeNotices {
    constructor(
        private readonly recruitRepository: RecruitRepository
    ) {}
    async load(): Promise<LoadHomeNotices.Result> {
        try {
            const recruit_list = await this.recruitRepository.loadHomeNoticesRecruit();
            console.log(recruit_list);
            if(recruit_list === []) {
                return {
                    recruit_list: [],
                    error: new NoListError()
                };
            }
            return { recruit_list };
        }
        catch(err) {
            console.log(err);
            return { recruit_list: [], error: new ServerError() };
        }
    }
}
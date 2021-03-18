import { LoadSimpleEnterprises } from "../../domain/usecases";
import { RecruitRepository } from "../../infra/db/repositories";
import { NoListError, ServerError } from "../../presentation/errors";

export class DbLoadSimpleEnterprises implements LoadSimpleEnterprises {
    constructor(
        private readonly recruitRepository: RecruitRepository
    ) {}
    async load(): Promise<LoadSimpleEnterprises.Result> {
        try {
            const list = await this.recruitRepository.load();
            if(list === []) {
                return {
                    list: [],
                    error: new NoListError()
                };
            }
            return { list };
        }
        catch(err) {
            console.log(err);   // 에러 로깅
            return { list: [], error: new ServerError() };
        }
    }
}

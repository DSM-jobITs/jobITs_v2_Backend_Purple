import { LoadSimpleEnterprises } from "../../domain/usecases";
import { NoListError, ServerError } from "../../presentation/errors";
import { LoadSimpleEnterprisesRepository } from "../protocols/repository/recruit";

export class DbLoadSimpleEnterprises implements LoadSimpleEnterprises {
    constructor(
        private readonly recruitRepository: LoadSimpleEnterprisesRepository
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

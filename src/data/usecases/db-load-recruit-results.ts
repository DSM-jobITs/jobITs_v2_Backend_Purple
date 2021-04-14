import { LoadRecruitResults } from "../../domain/usecases";
import { NoListError, ServerError } from "../../presentation/errors";
import { LoadRecruitResultsRepository } from "../protocols/repository/recruit";

export class DbLoadRecruitResults implements LoadRecruitResults {
    constructor(
        private readonly recruitRepository: LoadRecruitResultsRepository
    ) {}
    async loadRecruitResults(input: LoadRecruitResults.Input): Promise<LoadRecruitResults.Result> {
        try {
            const { address, entName, numOfWorker, workContent } = input;
            const list = await this.recruitRepository.loadRecruitResults({
                name: entName,
                specialty: workContent,
                address,
                worker: numOfWorker
            });
            if(list === []) {
                return { list: [], error: new NoListError() };
            }
            return { list };
        } catch (err) {
            console.log(err);
            return { list: [], error: new ServerError() };
        }
    }
}

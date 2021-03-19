export class LoadRecruitResultsRepository {
    loadRecruitResults:(input: LoadRecruitResultsRepository.input) => Promise<LoadRecruitResultsRepository.Result>;
}

export namespace LoadRecruitResultsRepository {
    export type Enterprise = {
        recruit_deadline: string,
        enterprise_name: string,
        enterprise_introduce: string,
        qualification_specialty: string,
        recruit_id: string
    };
    export type input = {
        name: string,
        specialty: string,
        address: string,
        worker: number
    };
    export type Result = LoadRecruitResultsRepository.Enterprise[];
}
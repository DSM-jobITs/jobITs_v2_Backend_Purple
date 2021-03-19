export interface LoadRecruitResults {
    loadRecruitResults:(input: LoadRecruitResults.Input) => Promise<LoadRecruitResults.Result>;
}

export namespace LoadRecruitResults {
    export type Enterprise = {
        recruit_deadline: string,
        enterprise_name: string,
        enterprise_introduce: string,
        qualification_specialty: string,
        recruit_id: string
    }
    export type Input = {
        // body 값들 타입 정의하기
        entName: string,
        workContent: string,
        address: string,
        numOfWorker: number
        // dbloadRecruitresults input값들도 타입 정의하기
        // dbloadRecruitresultsrepository input값들도 타입 정의하기
    }
    export type Result = {
        list: LoadRecruitResults.Enterprise[],
        error?: Error
    }
}
export class LoadHomeNoticesRecruitRepository {
    loadHomeNoticesRecruit:() => Promise<LoadHomeNoticesRecruitRepository.Result>;
}

export namespace LoadHomeNoticesRecruitRepository {
    export type Recruit = {
        recruit_recruit_id: string,
        recruit_recruit_no: number,
        recruit_reception: string,
        enterprise_name: string
    }
    export type Result = LoadHomeNoticesRecruitRepository.Recruit[];
}
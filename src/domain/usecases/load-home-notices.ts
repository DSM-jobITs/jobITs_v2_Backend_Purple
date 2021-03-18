export interface LoadHomeNotices {
    load:() => Promise<LoadHomeNotices.Result>;
}

export namespace LoadHomeNotices {
    export type Recruit = {
        recruit_recruit_no: number,
        recruit_reception: string,
        enterprise_name: string
    }
    export type Result = {
        recruit_list: LoadHomeNotices.Recruit[],
        error?: Error
        // 추후 확장성
        // ex)
        // notice_list: ...
    }
}
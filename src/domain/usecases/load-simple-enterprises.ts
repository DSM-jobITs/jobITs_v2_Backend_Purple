export interface LoadSimpleEnterprises {
    load:() => Promise<LoadSimpleEnterprises.Result>
    // 인자로 sortBy 나중에 넣기
}

export namespace LoadSimpleEnterprises {
    export type Enterprise = {
        recruit_deadline: string,
        enterprise_name: string,
        enterprise_introduce: string,
        qualification_specialty: string,
        recruit_id: string
    }
    export type Result = {
        list: LoadSimpleEnterprises.Enterprise[],
        error?: Error
    }
}

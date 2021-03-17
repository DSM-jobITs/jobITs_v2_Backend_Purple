export class LoadSimpleEnterprisesRepository {
    load:() => Promise<LoadSimpleEnterprisesRepository.Result>
}

export namespace LoadSimpleEnterprisesRepository {
    export type Enterprise = {
        recruit_deadline: string,
        enterprise_name: string,
        enterprise_introduce: string,
        specialty_specialty: string,
        recruit_id: string
    }
    export type Result = LoadSimpleEnterprisesRepository.Enterprise[]
}

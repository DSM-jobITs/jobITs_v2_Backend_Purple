import { LoadRecruitResults } from "../../domain/usecases";
import { ServerError } from "../errors";
import { notFound, ok, serverError } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class RecruitSearchController implements Controller {
    constructor(
        private readonly loadRecruitResults: LoadRecruitResults
    ) {}
    async handle(request: RecruitSearchController.Request): Promise<HttpResponse> {
        try {
            // (희망사항) 검색값 포맷 검사 --- validation
            // 컬럼별로 검색
            const data = await this.loadRecruitResults.loadRecruitResults(request);
            const { error, list } = data;
            if(error) {
                if(error.message === `Internal server error`) {
                    return serverError(error);
                }
                return notFound(error);
            }
            return ok({ list });

        } catch (err) {
            console.log(err);
            return serverError(new ServerError());
        }
    }
}

export namespace RecruitSearchController {
    export type Request = {
        // body 값들 타입 정의하기
        entName: string,
        workContent: string,
        address: string,
        numOfWorker: number
        // dbloadRecruitresults input값들도 타입 정의하기
        // dbloadRecruitresultsrepository input값들도 타입 정의하기
    }
}
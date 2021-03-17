import { LoadSimpleEnterprises } from "../../domain/usecases";
import { ServerError } from "../errors";
import { notFound, ok, serverError } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class RecruitBasicController implements Controller {
    constructor(
        private readonly loadSimpleEnterprises: LoadSimpleEnterprises
    ) {}
    async handle(): Promise<HttpResponse> {
        try {
            const data = await this.loadSimpleEnterprises.load();
            const { error, list } = data;
            if(error) {
                return notFound(error);
            }
            return ok({ list });
            // reception을 기준으로 db에서 목록 가지고 오기
        }
        catch(err) {
            console.log(err);
            return serverError(new ServerError());
        }
    }
}

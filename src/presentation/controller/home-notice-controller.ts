import { LoadHomeNotices } from "../../domain/usecases";
import { ServerError } from "../errors";
import { notFound, ok, serverError } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class HomeNoticeController implements Controller {
    constructor(
        private readonly loadHomeNotices: LoadHomeNotices
    ) {}
    async handle(): Promise<HttpResponse> {
        try {
            const data = await this.loadHomeNotices.load();
            const { error } = data;
            if(error) {
                if(error.message === `Internal server error`) {
                    return serverError(error);
                }
                return notFound(error);
            }
            return ok({ ...data });
        }
        catch(err) {
            console.log(err);
            return serverError(new ServerError());
        }
    }
}

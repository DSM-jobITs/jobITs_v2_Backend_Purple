import { UpdateAccount } from "../../domain/usecases";
import { ServerError } from "../../presentation/errors";
import { serverError } from "../../presentation/helpers";
import { Hasher } from "../protocols/cryptography";
import { UpdateUserPassowrdRepository } from "../protocols/repository";

export class DbUpdateAccount implements UpdateAccount {
  constructor (
      private readonly updateUserPasswordRepository: UpdateUserPassowrdRepository,
      private readonly hasher: Hasher
  ) {}

  async update(account: UpdateAccount.Params): Promise<UpdateAccount.Result> {
      // 여기서부터 db에 비번 update 로직 짜기
      try {
        const { id, password } = account;
        const hash = await this.hasher.hash(password);
        await this.updateUserPasswordRepository.updatePassword(id, hash);
        return null as any;
      }
      catch(err) {
        console.log(err);
          return { error: serverError(new ServerError()) };
      }
      
  }
}

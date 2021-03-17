export class UpdateUserPassowrdRepository {
    updatePassword: (id: string, password: string) => Promise<any>
}

// export namespace LoadUserByEmailRepository {
//     export type Result = {
//         id?: string,
//         password?: string,
//         name?: string,
//         error?: HttpResponse
//     };
// }

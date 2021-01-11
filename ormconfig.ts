import { Certificate, Depart, Enterprise, Introduction, Manager, Qualification, Recruit, Specialty, Student, User, Welfare } from "./src/database/entity";
import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
   type: "mysql",
   host: "jobits.cu895ra3thfv.ap-northeast-2.rds.amazonaws.com",
   port: 3306,
   username: "jobits",
   password: "jobitspw123!",
   database: "jobits",
   synchronize: true,
   logging: true,
   entities: [Certificate, Depart, Enterprise, Introduction, Manager, Qualification, Recruit, Specialty, Student, User, Welfare],
 };

export default connectionOptions;
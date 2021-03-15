import { ormConfig } from '.';
import { ConnectionOptions } from 'typeorm';

export const connectionOptions: ConnectionOptions = {
  type: "mysql",
  host: ormConfig.mysql.host,
  port: 3306,
  username: ormConfig.mysql.username,
  password: ormConfig.mysql.password,
  database: ormConfig.mysql.name,
  synchronize: true,
  logging: true,
  entities: ["src/infra/db/entities/*.ts"],
};

// export default connectionOptions;
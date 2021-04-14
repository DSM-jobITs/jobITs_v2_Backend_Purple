import { ormConfig } from '.';
import { ConnectionOptions } from 'typeorm';
import env from '../../main/config/env';

export const connectionOptions: ConnectionOptions = {
  type: "mysql",
  host: env.mysql.host,
  port: env.mysql.port,
  username: env.mysql.username,
  password: env.mysql.password,
  database: env.mysql.databaseName,
  synchronize: true,
  logging: true,
  entities: ["src/infra/db/entities/*.ts"],
};

// export default connectionOptions;
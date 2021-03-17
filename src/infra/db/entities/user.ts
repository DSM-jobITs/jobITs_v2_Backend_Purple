import { Entity, PrimaryColumn, Column } from "typeorm";
import { ValidationEntity } from "./validation";

@Entity()
export class User extends ValidationEntity {
  @PrimaryColumn({ length: 30 })
  id: string;

  @Column({ length: 60 })
  password: string;

  @Column({ length: 10 })
  name: string;
}

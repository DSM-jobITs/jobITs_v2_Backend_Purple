import { Entity, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { Depart } from "./depart";
import { User } from "./user";

@Entity()
export class Student {
  @PrimaryColumn({ name: "std_no", type: "char", length: 4 })
  stdNo: string;

  @OneToOne((type) => Depart, (depart) => depart.id, {
    cascade: true,
    eager: true,
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "depart_id" })
  depart: Depart;

  @OneToOne((type) => User, (user) => user.id, {
    cascade: true,
    eager: true,
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn()
  user: User;
}
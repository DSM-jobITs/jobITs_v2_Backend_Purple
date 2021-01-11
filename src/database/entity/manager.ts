import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Enterprise } from "./enterprise";

@Entity()
export class Manager {
  @PrimaryColumn({ length: 12, type: "char", name: "ent_no" })
  entNo: string;

  @Column({ length: 20, nullable: false })
  rank: string;

  @Column({ length: 14, type: "char", nullable: false })
  phone: string;

  @Column({ length: 30, nullable: false })
  email: string;

  @OneToOne((type) => Enterprise, (enterprise) => enterprise.entNo, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "ent_no" })
  enterprise: Enterprise;
}
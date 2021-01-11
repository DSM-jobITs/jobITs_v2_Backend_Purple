import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Enterprise } from "./enterprise";

@Entity()
export class Meal {
  @PrimaryColumn({ length: 12, type: "char", name: "ent_no" })
  entNo: string;

  @Column({ type: "tinyint", default: false })
  breakfast: boolean;

  @Column({ type: "tinyint", default: false })
  lunch: boolean;

  @Column({ type: "tinyint", default: false })
  dinner: boolean;

  @Column({ type: "tinyint", default: false })
  salary: boolean;

  @OneToOne((type) => Enterprise, (enterprise) => enterprise.entNo, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "ent_no" })
  enterprise: Enterprise;
}
import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { ValidationEntity } from "./validation";
import { Recruit } from "./recruit";

@Entity()
export class Meal extends ValidationEntity {
  @PrimaryColumn({ length: 30, name: "recruit_id" })
  recruitId: string;

  @Column({ type: "tinyint", default: false })
  breakfast: boolean;

  @Column({ type: "tinyint", default: false })
  lunch: boolean;

  @Column({ type: "tinyint", default: false })
  dinner: boolean;

  @Column({ type: "tinyint", default: false })
  salary: boolean;

  @OneToOne((type) => Recruit, (recruit) => recruit.recruitId, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "recruit_id", referencedColumnName: "recruitId" })
  recruit: Recruit;
}

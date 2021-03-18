import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { ValidationEntity } from "./validation";
import { Enterprise } from "./enterprise";

@Entity()
export class Recruit extends ValidationEntity {
  @PrimaryColumn({ name: "recruit_no" })
  recruitNo: number;

  @Column({ name: "recruit_id", length: 30 })
  recruitId: string;

  @Column({ length: 10, type: "char", nullable: true })
  reception: string;

  @Column({ length: 10, type: "char", nullable: true })
  deadline: string;

  @Column({ type: "tinyint", name: "recruit_plan", nullable: true })
  recruitPlan: boolean;

  @Column({ length: 5, type: "char", name: "start_time", nullable: true })
  startTime: string;

  @Column({ length: 5, type: "char", name: "end_time", nullable: true })
  endTime: string;

  @Column({ nullable: true })
  salary: number;

  @Column({ nullable: true })
  period: number;

  @Column({ type: "tinyint", nullable: true, default: false })
  expired: boolean;

  @Column({ nullable: true })
  personnel: number;

  @Column({ nullable: true })
  detail: string;

  @Column({ name: "ent_no", length: 12 })
  entNo: string;

  @ManyToOne((type) => Enterprise, (enterprise) => enterprise.entNo, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "ent_no" })
  enterprise!: Enterprise;
}

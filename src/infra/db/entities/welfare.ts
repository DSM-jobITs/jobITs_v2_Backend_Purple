import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { ValidationEntity } from "./validation";
import { Recruit } from "./recruit";

@Entity()
export class Welfare extends ValidationEntity{
  @PrimaryColumn({ length: 30, name: "recruit_id" })
  recruitId: string;

  @Column({ type: "tinyint", default: false, name: "four_major" })
  fourMajor: boolean;

  @Column({ type: "tinyint", default: false, name: "self_develop" })
  selfDevelop: boolean;

  @Column({ type: "tinyint", default: false })
  laptop: boolean;

  @Column({ nullable: true })
  etc: string;

  @OneToOne((type) => Recruit, (recruit) => recruit.recruitId, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "recruit_id", referencedColumnName: "recruitId" })
  recruit: Recruit;
}

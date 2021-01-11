import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Introduction } from "./introduction";
import { Recruit } from "./recruit";

@Entity()
export class Enterprise {
  @PrimaryColumn({ length: 12, type: "char", name: "ent_no" })
  entNo: string;

  @Column({ length: 30, nullable: true })
  name: string;

  @Column({ length: 13, type: "char", nullable: true })
  phone: string;

  @Column({ length: 15, name: "establishment_date", nullable: true })
  establishmentDate: string;

  @Column({ type: "float", nullable: true })
  sales: number;

  @Column({ length: 255, nullable: true })
  introduce: string;

  @Column({ length: 50, nullable: true })
  sector: string;

  @Column({ length: 40, nullable: true })
  address: string;

  @Column({ length: 5, type: "char", name: "zip_code", nullable: true })
  zipCode: string;

  @OneToMany((type) => Recruit, (recruit) => recruit.enterprise)
  recruits!: Recruit[];

  @OneToMany((type) => Introduction, (introduction) => introduction.enterprise)
  introductinos!: Introduction[];
}
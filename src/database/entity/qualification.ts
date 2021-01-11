import {
    Entity,
    PrimaryColumn,
    Column,
    OneToOne,
    JoinColumn,
    OneToMany,
  } from "typeorm";
  import { Recruit } from "./recruit";
  import { Certificate } from "./certificate";
  import { Specialty } from "./specialty";
  
  @Entity()
  export class Qualification {
    @PrimaryColumn({ length: 30 })
    id: string;
  
    @Column({ nullable: false })
    grade: number;
  
    @OneToOne((type) => Recruit, (recruit) => recruit.id, {
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
    @JoinColumn()
    recruit: Recruit;
  
    @OneToMany((type) => Certificate, (certificate) => certificate.qualification)
    certficates!: Certificate[];
  
    @OneToMany((type) => Specialty, (specialty) => specialty.qualification)
    specialties!: Specialty[];
  }
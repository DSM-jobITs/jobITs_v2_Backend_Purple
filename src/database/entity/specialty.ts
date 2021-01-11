import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Qualification } from "./qualification";

@Entity()
export class Specialty {
  @PrimaryColumn({ length: 30 })
  id: string;

  @Column({ length: 20 })
  specialty: string;

  @Column({ length: 30, name: "qualification_id" })
  qualificationId: string

  @ManyToOne(
    (type) => Qualification,
    (qualification) => qualification.certficates,
    {
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    }
  )
  @JoinColumn({ name: "qualification_id" })
  qualification!: Qualification;
}
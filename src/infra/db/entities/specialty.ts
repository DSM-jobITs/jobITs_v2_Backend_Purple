import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Qualification } from "./qualification";
import { ValidationEntity } from "./validation";

@Entity()
export class Specialty extends ValidationEntity {
  @PrimaryColumn({ name: "specialty_id", length: 30 })
  specialtyId: string;

  @Column({ length: 60 })
  specialty: string;

  @Column({ length: 30, name: "qualification_id" })
  qualificationId: string;

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

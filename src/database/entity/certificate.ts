import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Qualification } from "./qualification";

@Entity()
export class Certificate {
  @PrimaryColumn({ length: 30 })
  id: string;

  @Column({ length: 20 })
  certificate: string;

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

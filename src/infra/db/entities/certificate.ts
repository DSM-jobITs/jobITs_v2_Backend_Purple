import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Qualification } from "./qualification";
import { ValidationEntity } from "./validation";

@Entity()
export class Certificate extends ValidationEntity {
  @PrimaryColumn({ name: "certificate_id", length: 30 })
  certificateId: string;

  @Column({ length: 20 })
  certificate: string;

  @Column({ name: "qualification_id", length: 30 })
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

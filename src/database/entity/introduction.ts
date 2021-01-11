import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Enterprise } from "./enterprise";

@Entity()
export class Introduction {
  @PrimaryColumn({ length: 30 })
  id: string;

  @Column({ name: "original_name" })
  originalName: string;

  @Column({ length: 50, name: "file_uuid" })
  fileUuid: string;

  @ManyToOne((type) => Enterprise, (enterprise) => enterprise.entNo, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "ent_no" })
  enterprise!: Enterprise;
}
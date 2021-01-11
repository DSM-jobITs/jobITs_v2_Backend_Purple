import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Depart {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: false, length: 20 })
  dept: string;
}
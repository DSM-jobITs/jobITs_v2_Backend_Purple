import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { ValidationEntity } from "./validation";
import { IsNotEmpty, Max, Min } from "class-validator";
import { Student } from "./student";

@Entity()
export class Depart extends ValidationEntity {
  @PrimaryColumn()
  @Min(1)
  @Max(4)
  id: number;

  @Column({ nullable: false, length: 20 })
  @IsNotEmpty()
  dept: string;

  @OneToMany(() => Student, (student) => student.depart)
  students: Student[];
}

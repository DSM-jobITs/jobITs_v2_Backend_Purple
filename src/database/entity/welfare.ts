// import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
// import { Enterprise } from "./enterprise";

// @Entity()
// export class Welfare {
//   @PrimaryColumn({ length: 12, type: "char", name: "ent_no" })
//   entNo: string;

//   @Column({ type: "tinyint", default: false, name: "four_major" })
//   fourMajor: boolean;

//   @Column({ type: "tinyint", default: false, name: "self_develop" })
//   selfDevelop: boolean;

//   @Column({ type: "tinyint", default: false })
//   laptop: boolean;

//   @Column({ nullable: true })
//   etc: string;

//   @OneToOne((type) => Enterprise, (enterprise) => enterprise.entNo, {
//     onUpdate: "CASCADE",
//     onDelete: "CASCADE",
//   })
//   @JoinColumn({ name: "ent_no" })
//   enterprise: Enterprise;
// }
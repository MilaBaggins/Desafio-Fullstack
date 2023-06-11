import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
  AfterLoad,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Contact } from "./contacts.entity";

@Entity("users")
class User {
  age: number | null;

  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  username: string;

  @Column({ type: "varchar", length: 60, unique: true })
  email: string;

  @Column({ type: "varchar", length: 260, unique: true })
  password: string;

  @Column({ type: "varchar", length: 260 })
  img: string;

  @Column({ type: "varchar", length: 20 })
  phone: string;

  @CreateDateColumn()
  createdAt?: string | Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: string | Date | null | undefined;

  @OneToMany(() => Contact, (contacts) => contacts.user)
  posts: Contact[];
  superuser: any;

  @BeforeInsert()
  transformNameUpperEmailLower() {
    this.email = this.email.toLowerCase();
    this.username = this.username.toLowerCase();
  }
}

export { User };

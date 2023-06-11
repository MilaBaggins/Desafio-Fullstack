import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 60, unique: true })
  email: string;

  @Column({ type: "varchar", length: 250 })
  img: string;

  @Column({ type: "int" })
  phone: number;

  @CreateDateColumn()
  createdAt: Date | string;

  @ManyToOne(() => User)
  user: User;
}

export { Contact };

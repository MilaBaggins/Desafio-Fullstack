import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
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
  phone: string;

  @CreateDateColumn()
  createdAt: Date | string;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;
}

export { Contact };

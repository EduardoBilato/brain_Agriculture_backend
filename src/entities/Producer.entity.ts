import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { Farm } from "./Farm.entity";

@Entity()
export class Producer {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @PrimaryColumn()
  @Column({ default: "" })
  cpfCnpj: string;

  @Column({ default: "" })
  name: string;

  @OneToMany(() => Farm, (farm) => farm.producer)
  farms: Farm[];
}

export default Producer;

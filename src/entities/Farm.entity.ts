import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Producer } from "./Producer.entity";
import { Culture } from "./Culture.entity";

@Entity()
export class Farm {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ default: "" })
  name: string;

  @Column({ default: "" })
  city: string;

  @Column({ default: "" })
  state: string;

  @Column("float", { default: 0.0 })
  totalArea: number;

  @Column("float", { default: 0.0 })
  agriculturalArea: number;

  @Column("float", { default: 0.0 })
  vegetationArea: number;

  @ManyToOne(() => Producer, (producer) => producer.farms)
  producer: Producer;

  @ManyToMany(() => Culture)
  @JoinTable()
  cultures: Culture[];
}

export default Farm;

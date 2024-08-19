import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Culture {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: "" })
  name: string;
}

export default Culture;

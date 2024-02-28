import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "./location.entity";

@Entity()
export class LocationType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;
}
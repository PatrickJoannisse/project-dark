import { Commander } from "src/v1/commanders/entities/commander.entity";
import { Column, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

export class Ship {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @ManyToOne(() => Commander, commander => commander.ships)
  // commander: Commander;
}

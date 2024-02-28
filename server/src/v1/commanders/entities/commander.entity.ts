import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Commander {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  callsign: string;

  @Column() // make this a relationship to a table of factions later
  faction: string;
}

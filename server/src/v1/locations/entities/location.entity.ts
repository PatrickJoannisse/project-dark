import { Column, Entity, ManyToOne, OneToOne, Point, PrimaryGeneratedColumn } from "typeorm";
import { LocationType } from "./location-type.entity";

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => LocationType, (location) => location.id)
  locationType: number;

  @Column('point')
  coordinates: Point

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('timestamp', { nullable: true })
  expireAt: Date;
}

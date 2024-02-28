import { Point } from "typeorm";

export class CreateLocationDto {
  name: string;
  description: string;
  locationTypeId: number;
  coordinates: Point;
  createdAt: Date;
  expireAt?: Date;
}

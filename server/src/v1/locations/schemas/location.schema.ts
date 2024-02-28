import { EntitySchema } from 'typeorm';
import { Location } from '../entities/location.entity';

export const LocationSchema = new EntitySchema<Location>({
  name: 'Location',
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    locationType: {
      type: Number,
    },
    coordinates:{
      type: 'point',
    },
    createdAt: {
      type: Date,
      createDate: true,
    },
    expireAt: {
      type: Date,
    },
  },
});
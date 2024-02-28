import { EntitySchema } from "typeorm";
import { Commander } from "../entities/commander.entity";

export const CommanderSchema = new EntitySchema<Commander>({
  name: 'Commander',
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true,
    },
    callsign: {
      type: String,
      unique: true,
    },
    faction: {
      type: String,
    },
  },
});
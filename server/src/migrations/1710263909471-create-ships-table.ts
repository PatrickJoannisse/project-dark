import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateShipsTable1710263909471 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "ships" (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

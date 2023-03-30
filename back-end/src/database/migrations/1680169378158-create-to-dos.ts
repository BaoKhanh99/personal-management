import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateToDos1680169378158 implements MigrationInterface {
  name = 'createToDos1680169378158';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "to-dos" (
				"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
				"updated_at" TIMESTAMP NOT NULL DEFAULT now(),
				"created_at" TIMESTAMP NOT NULL DEFAULT now(),
				"deleted_at" TIMESTAMP, "name" character varying NOT NULL,
				"description" character varying NOT NULL,
				CONSTRAINT "PK_8ab9dc44fe394bb73ff74876dbb" PRIMARY KEY ("id")
			)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "to-dos"`);
  }
}

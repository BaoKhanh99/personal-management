import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1679562523833 implements MigrationInterface {
  name = 'createUsers1679562523833';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" (
				"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
				"updated_at" TIMESTAMP NOT NULL DEFAULT now(),
				"created_at" TIMESTAMP NOT NULL DEFAULT now(),
				"deleted_at" TIMESTAMP,
				"email" character varying NOT NULL,
				"password" character varying NOT NULL,
				"name" character varying NOT NULL,
				CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
				CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
			)`,
    );
    await queryRunner.query(`CREATE INDEX "users_email" ON "user" ("email") `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."users_email"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}

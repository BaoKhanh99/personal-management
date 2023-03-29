import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateToDos1680061002542 implements MigrationInterface {
  name = 'createToDos1680061002542';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "to_dos" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        "deleted_at" TIMESTAMP,
        "name" character varying NOT NULL,
        "description" character varying NOT NULL,
        "is_done" boolean NOT NULL DEFAULT false,
        "start_date" date NOT NULL,
        "end_date" date NOT NULL,
        "user_id" uuid NOT NULL, CONSTRAINT "PK_19d14b861427e18d619639c8f2b" PRIMARY KEY ("id")
      )`,
    );
    await queryRunner.query(
      `ALTER TABLE "to_dos" ADD CONSTRAINT "FK_f95b58e1f020b1646b8a6725785"
        FOREIGN KEY ("user_id") REFERENCES "users"("id")
        ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "to_dos" DROP CONSTRAINT "FK_f95b58e1f020b1646b8a6725785"`,
    );
    await queryRunner.query(`DROP TABLE "to_dos"`);
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class createToDos1686842742230 implements MigrationInterface {
  name = 'createToDos1686842742230';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "to_dos" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "title" character varying NOT NULL,
        "description" character varying NULL,
        "start_date" TIMESTAMP NOT NULL,
        "end_date" TIMESTAMP NULL,
        "user_id" uuid NOT NULL,
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        "deleted_at" TIMESTAMP,
        CONSTRAINT "PK_0ba5e70efa865410598075a2fc4" PRIMARY KEY ("id")
      )`,
    );
    await queryRunner.query(
      `ALTER TABLE "to_dos" ADD CONSTRAINT
        "FK_b8f631bad8b4234b66bde710158" FOREIGN KEY ("user_id") REFERENCES "users"("id")
        ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "to_dos" DROP CONSTRAINT "FK_b8f631bad8b4234b66bde710158"`,
    );
    await queryRunner.query(`DROP TABLE "to_dos"`);
  }
}

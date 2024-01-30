import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCategoryTable1706627398235 implements MigrationInterface {
  name = 'CreateCategoryTable1706627398235';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`category\` (
        \`id\` int NOT NULL AUTO_INCREMENT,
        \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
        \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        \`deleted_at\` datetime(6) NULL,
        \`category\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`category\``);
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSubCategoryTable1706628050370 implements MigrationInterface {
  name = 'CreateSubCategoryTable1706628050370';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`sub_category\` (
        \`id\` int NOT NULL AUTO_INCREMENT,
        \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
        \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        \`deleted_at\` datetime(6) NULL,
        \`sub_category\` varchar(255) NOT NULL,
        \`category_id\` int NOT NULL, PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`sub_category\` ADD CONSTRAINT \`FK_4ec8c495300259f2322760a39fa\`
      FOREIGN KEY (\`category_id\`) REFERENCES \`category\`(\`id\`)
      ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`sub_category\` DROP FOREIGN KEY \`FK_4ec8c495300259f2322760a39fa\``,
    );
    await queryRunner.query(`DROP TABLE \`sub_category\``);
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCashFlowTable1706629366303 implements MigrationInterface {
  name = 'CreateCashFlowTable1706629366303';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`cash_flow\` (
        \`id\` int NOT NULL AUTO_INCREMENT,
        \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
        \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        \`deleted_at\` datetime(6) NULL,
        \`note\` varchar(255) NULL,
        \`description\` varchar(1000) NULL,
        \`amount\` bigint UNSIGNED NOT NULL,
        \`type\` enum ('0', '1') NOT NULL,
        \`wallet_type\` enum ('0', '1', '2', '3', '4', '5', '6') NOT NULL,
        \`transaction_Date\` date NULL,
        \`sub_category_id\` int NOT NULL,
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`cash_flow\` ADD CONSTRAINT \`FK_ce95b0df045a98a7ccc5554488d\`
      FOREIGN KEY (\`sub_category_id\`) REFERENCES \`sub_category\`(\`id\`)
      ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`cash_flow\` DROP FOREIGN KEY \`FK_ce95b0df045a98a7ccc5554488d\``,
    );
    await queryRunner.query(`DROP TABLE \`cash_flow\``);
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBankAccountTable1713182567616 implements MigrationInterface {
  name = 'CreateBankAccountTable1713182567616';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`bank_account\` (
        \`id\` int NOT NULL AUTO_INCREMENT,
        \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
        \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        \`deleted_at\` datetime(6) NULL,
        \`account_number\` varchar(255) NULL,
        \`qr_image\` varchar(255) NULL,
        \`bank_id\` int NULL,
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB`,
    );

    await queryRunner.query(
      `ALTER TABLE \`bank\` ADD \`type\` enum ('0', '1', '2') NOT NULL`,
    );

    await queryRunner.query(
      `ALTER TABLE \`bank_account\` ADD CONSTRAINT \`FK_24569b6843af6bcef189740e99e\`
        FOREIGN KEY (\`bank_id\`) REFERENCES \`bank\`(\`id\`)
        ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`bank_account\` DROP FOREIGN KEY \`FK_24569b6843af6bcef189740e99e\``,
    );
    await queryRunner.query(`ALTER TABLE \`bank\` DROP COLUMN \`type\``);
    await queryRunner.query(`DROP TABLE \`bank_account\``);
  }
}

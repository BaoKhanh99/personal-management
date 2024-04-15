import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1713183204106 implements MigrationInterface {
  name = 'CreateUserTable1713183204106';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (
        \`id\` int NOT NULL AUTO_INCREMENT,
        \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
        \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        \`deleted_at\` datetime(6) NULL,
        \`name\` varchar(255) NULL,
        \`email\` varchar(255) NULL,
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB`,
    );

    await queryRunner.query(
      `ALTER TABLE \`bank\` ADD \`user_id\` int NOT NULL`,
    );

    await queryRunner.query(
      `ALTER TABLE \`bank_account\` DROP FOREIGN KEY \`FK_24569b6843af6bcef189740e99e\``,
    );

    await queryRunner.query(
      `ALTER TABLE \`bank_account\` CHANGE \`account_number\` \`account_number\` varchar(255) NOT NULL`,
    );

    await queryRunner.query(
      `ALTER TABLE \`bank_account\` CHANGE \`bank_id\` \`bank_id\` int NOT NULL`,
    );

    await queryRunner.query(
      `ALTER TABLE \`bank\` CHANGE \`name\` \`name\` varchar(255) NOT NULL`,
    );

    await queryRunner.query(
      `ALTER TABLE \`bank_account\` ADD CONSTRAINT \`FK_24569b6843af6bcef189740e99e\`
        FOREIGN KEY (\`bank_id\`) REFERENCES \`bank\`(\`id\`)
        ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`bank\` ADD CONSTRAINT \`FK_dcda2a7477f1bd40ff7ebd53e5c\`
        FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`)
        ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`bank\` DROP FOREIGN KEY \`FK_dcda2a7477f1bd40ff7ebd53e5c\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`bank_account\` DROP FOREIGN KEY \`FK_24569b6843af6bcef189740e99e\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`bank\` CHANGE \`name\` \`name\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`bank_account\` CHANGE \`bank_id\` \`bank_id\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`bank_account\` CHANGE \`account_number\` \`account_number\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`bank_account\` ADD CONSTRAINT \`FK_24569b6843af6bcef189740e99e\`
        FOREIGN KEY (\`bank_id\`) REFERENCES \`bank\`(\`id\`)
        ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`ALTER TABLE \`bank\` DROP COLUMN \`user_id\``);
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}

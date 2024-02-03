import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateFieldNameInCashFlow1706938677779
  implements MigrationInterface
{
  name = 'UpdateFieldNameInCashFlow1706938677779';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`cash_flow\` CHANGE \`wallet_type\` \`account_type\`
      enum ('0', '1', '2', '3', '4', '5', '6') NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`cash_flow\` CHANGE \`account_type\` \`wallet_type\`
      enum ('0', '1', '2', '3', '4', '5', '6') NOT NULL`,
    );
  }
}

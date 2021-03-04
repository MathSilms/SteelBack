import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateTransactions1614765688971 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
          new Table({
            name: 'transactions',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
              },
              {
                name: "total_weighting",
                type: 'decimal',
                precision: 4,
                scale: 2, 
            },
            {
                name: "type",
                type: "varchar",
            },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()',
              },
            ],
          }),
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('transactions');
      }

}

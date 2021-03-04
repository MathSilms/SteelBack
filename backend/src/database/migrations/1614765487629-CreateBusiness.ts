import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateBusiness1614765487629 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
          new Table({
            name: 'business',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
              },
              {
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'login',
                type: 'varchar',
                isUnique: true,
              },
              {
                name: "email",
                type: "varchar"
              },
              {
                name: "razao_social",
                type: "varchar"
            },
            {
                name: "cnpj",
                type: "varchar"
            },
            {
                name: "cep",
                type: "varchar",
            },
            {
                name: "is_cooperative",
                type: "boolean"
            },
              {
                name: 'password_hash',
                type: 'varchar',
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
        await queryRunner.dropTable('business');
      }

}

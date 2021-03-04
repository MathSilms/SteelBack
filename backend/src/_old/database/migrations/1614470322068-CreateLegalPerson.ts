import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLegalPerson1614470322068 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "legal_persons",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
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
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("legal_persons");
    }

}

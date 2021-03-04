import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class transactions1614722269239 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "transactions",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: "total_weighing",
                        type: "float",
                    },
                    {
                        name: "type",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    },

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("transactions");
    }

}

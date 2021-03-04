import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddBusinessrIdToTranasction1614765957430 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn(
            'transactions',
            new TableColumn({
                name: 'business_id',
                type: 'uuid',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            'transactions',
            new TableForeignKey({
                columnNames: ['business_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'business',
                name: 'transactionsBusinessId',
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            })
        );

    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('transactions', 'transactionsBusinessId');
        await queryRunner.dropColumn('transactions', 'legal_persons_id');
    }

}

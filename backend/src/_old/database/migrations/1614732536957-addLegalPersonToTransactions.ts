import {MigrationInterface, QueryRunner, TableColumn,TableForeignKey} from "typeorm";

export class addLegalPersonToTransactions1614732536957 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn(
            'transactions',
            new TableColumn({
                name: 'legal_persons_id',
                type: 'uuid',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            'transactions',
            new TableForeignKey({
                columnNames: ['legal_persons_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'legal_persons',
                name: 'transactionsLegalPersonsId',
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            })
        );

    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('transactions', 'transactionsLegalPersonsId');
        await queryRunner.dropColumn('transactions', 'legal_persons_id');
    }
}

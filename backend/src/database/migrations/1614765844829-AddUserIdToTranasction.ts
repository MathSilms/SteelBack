import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddUserIdToTranasction1614765844829 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn(
            'transactions',
            new TableColumn({
                name: 'user_id',
                type: 'uuid',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            'transactions',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                name: 'transactionsUser',
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            })
        );

    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('transactions', 'transactionsUser');
        await queryRunner.dropColumn('transactions', 'user_id');
    }
}

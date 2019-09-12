import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTable1568230293249 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "username",
                    type: "varchar",
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.dropTable('users')
    }

}

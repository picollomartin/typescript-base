import {MigrationInterface, QueryRunner} from "typeorm";
import {USERS_TABLE} from "../../app/helpers/constants";

export class createModifyUsersTable1568388859982 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.renameColumn(USERS_TABLE, 'username', 'othername');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.renameColumn(USERS_TABLE, 'othername', 'username')
    }

}

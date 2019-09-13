import {MigrationInterface, QueryRunner, Table} from "typeorm";
import {USERS_TABLE} from "../../app/helpers/constants";

export class createUsersTable1568317544117 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const userTable = new Table({
      name: USERS_TABLE,
      columns: [{
          name: 'id',
          type: 'int',
          isPrimary: true
      }, {
          name: 'username',
          type: 'string'
      }, {
          name: 'something_else',
          type: 'string'
      }]
    });


    queryRunner.createTable(userTable)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}

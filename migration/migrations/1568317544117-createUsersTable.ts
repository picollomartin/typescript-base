import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { USERS_TABLE } from '../../app/helpers/constants';

const userTable = new Table({
  name: USERS_TABLE,
  columns: [
    {
      name: 'id',
      type: 'int',
      isPrimary: true,
      isGenerated: true,
      generationStrategy: 'increment'
    },
    {
      name: 'username',
      type: 'varchar'
    },
    {
      name: 'something_else',
      type: 'varchar'
    }
  ]
});

export class createUsersTable1568317544117 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    return queryRunner.createTable(userTable, true);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    return queryRunner.dropTable(userTable, true);
  }
}

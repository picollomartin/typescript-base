'use strict';

import fs from 'fs';
import path from 'path';
import models from '../app/models';

const tables: any = Object.values(models.sequelize.models);

const truncateTable = model =>
  model.destroy({ truncate: true, cascade: true, force: true, restartIdentity: true });

const truncateDatabase = () => Promise.all(tables.map(truncateTable));

beforeEach(done => truncateDatabase().then(() => done()));

// including all test files
((pathToSearch: string) => {
  fs.readdirSync(pathToSearch).forEach((fileName: string) =>
    fs.lstatSync(`${pathToSearch}/${fileName}`).isDirectory()
      ? import(`${pathToSearch}/${fileName}`)
      : import(`${pathToSearch}/${fileName}`)
  );
})(path.join(__dirname, '.'));

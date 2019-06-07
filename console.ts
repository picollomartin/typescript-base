import * as repl from 'ts-node';
import fs from 'fs';
import models from './app/models';

const convertFunctionToAsync: any = f => async (...args) => {
  const result = await f(...args);
  console.log(JSON.stringify(result, null, 2)); // eslint-disable-line no-console
  return result;
};

const convertObjectFunctionsToAsync: any = serviceMethods => {
  const asyncServiceMethods = {};
  Object.keys(serviceMethods).forEach(key => {
    if (typeof serviceMethods[key] === 'function') {
      asyncServiceMethods[key] = convertFunctionToAsync(serviceMethods[key]);
    } else {
      asyncServiceMethods[key] = serviceMethods[key];
    }
  });
  return asyncServiceMethods;
};

Promise.resolve().then(() => {
  const replServer: any = repl.register({
    pretty: true,
    typeCheck: true
  });
  replServer.context.models = models;
  const servicesPath: any = './app/services/';
  fs.readdir(servicesPath, (err, files) => {
    files.forEach(file => {
      const serviceMethods = import(`${servicesPath}${file}`);
      const asyncServiceMethods = convertObjectFunctionsToAsync(serviceMethods);
      replServer.context[`${file.split('.')[0]}Service`] = asyncServiceMethods;
    });
  });
});

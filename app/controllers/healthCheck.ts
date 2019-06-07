export const healthCheck = (_: any, res: any) => res.status(200).send({
  uptime: process.uptime() 
});

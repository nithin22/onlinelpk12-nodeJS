module.exports = {
  HOST: "localhost",
  DB: "LPK12", 
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

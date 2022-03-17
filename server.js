const { app } = require('./app');

// Utils
const { sequelize } = require('./utils/database');

// Database
sequelize
  .authenticate()
  .then(() => console.log('Database Authenticated'))
  .catch((err) => console.log(err));

sequelize
  .sync()
  .then(() => console.log('Database Synced'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
});

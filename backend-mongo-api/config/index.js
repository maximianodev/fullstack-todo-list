const app = require('../routes/app');
const port = process.env.PORT || 3332;

const server = app.listen(port, function () {
  console.log(`Express server listening on port http://localhost:${port}/todos`);
});

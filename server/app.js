const express = require('express');

const app = express();
const port = 3000;
console.log('test');
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});


import express from 'express';
import path from 'path'
import cors from 'cors'
const app = express();
const __dirname = path.resolve();

app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.use()

const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
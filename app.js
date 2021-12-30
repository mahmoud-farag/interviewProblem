import express from 'express';
import path,{ dirname } from 'path';
import { fileURLToPath } from 'url';
import { handleTaskRoutes } from './routes/index.js';
import bodyParser from 'body-parser';

const __dirname = dirname(fileURLToPath(import.meta.url)),
      app = express(),
      PORT = process.env.PORT || 4000;

      
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));


app.use('/api', handleTaskRoutes)

app.use((req,res)=>{
    res.send('<h2> sorry this Page not exist .... try again</h2>')
})
app.listen(PORT, ()=>console.log(`server up on ${PORT}`))
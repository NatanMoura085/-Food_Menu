const express = require('express');
const bodyParser = require('body-parser');
const { Kafka } = require('kafkajs');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
const person = require('./models/person')

mongoose.set('strictQuery', false)
app.use(express.urlencoded({
extended: true

}))

app.use(cors())
app.use(express.json())
app.post('/person', async (req,res)=>{
    console.log(req.body);
const  newPerson = req.body;


try{

    await person.create(newPerson)
 res.status(201).json({mesage:'produto foi inserida com sucesso'})
}catch(error){

    res.status(500).json({mesage:error})

}
  

})

app.get('/person',(req,res)=>{

    res.json({ produtos:[] }); 

})
const DB_USER = 'Natan'
const DB_PASSWORD = encodeURIComponent('root')
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.qqm3urx.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log('conectou db')
    app.listen(3000)
})
.catch((err)=> console.log(err))


const kafka = new Kafka({ brokers: ['localhost:9092'] });
const producer = kafka.producer();

async function run() {
  await producer.connect();
}

run().catch(console.error);

// Endpoint para receber as mensagens do front-end e enviar para o Kafka
app.post('/messages', async (req, res) => {
  const { message } = req.body;
  await producer.send({
    topic: 'my-topic',
    messages: [{ value: message }],
  });
  res.json({ status: 'ok' });
});

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
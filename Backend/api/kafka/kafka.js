const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka1:9092', 'kafka2:9092']
});
const testConnection = async () => {
  try {
    await kafka.connect();
    console.log('Conexão com Kafka bem-sucedida!');
  } catch (error) {
    console.error('Erro ao conectar com Kafka:', error);
  }
}

testConnection();
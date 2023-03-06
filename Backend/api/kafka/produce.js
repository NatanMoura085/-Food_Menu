const producer = kafka.producer();

await producer.connect();

await producer.send({
  topic: 'my-topic',
  messages: [
    { value: 'Hello Kafka!' },
  ],
});
await producer.disconnect();
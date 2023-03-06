const consumer = kafka.consumer({ groupId: 'test-group' });

await consumer.connect();

await consumer.subscribe({ topic: 'my-topic', fromBeginning: true });

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      partition,
      offset: message.offset,
      value: message.value.toString(),
    });
  },
});
const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["http://10.110.227.153:9092"],
});

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting..");
  admin.connect();
  console.log("Admin connection success..");
}

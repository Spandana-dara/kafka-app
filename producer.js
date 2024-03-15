const { kafka } = require("./client");

async function init() {
  const producer = kafka.producer();

  console.log("Connecting Producer");
  await producer.connect();
  console.log("Producer connected successfully");
  await producer.send({
    topic: "rider-updates",
    messages:[
       {
        partition:0,
        key:"location-update",
        value:JSON.stringify({name:'tony stark', loc:'Hyderabad'});
       }
    ]
  });
  await producer.disconnect();
}

init();

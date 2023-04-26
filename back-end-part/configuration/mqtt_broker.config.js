const host = "mqtt-dashboard.com";
const port = "1883";
const project_id = "b556606d67dd8c7cecfab843fecbe28c";
const project_publish_parts = ["/Devices Details", "/Rooms Details"];
const project_subscribe_parts = ["/Devices Details", "/Rooms Details"];

const topics_publish = project_publish_parts.map(
  (topic) => `${project_id}/projet-IoT-2022-2023/back-end${topic}`
);
const topics_subscribe = project_subscribe_parts.map(
  (topic) => `${project_id}/projet-IoT-2022-2023/hardware${topic}`
);

const configuration = {
  connectUrl: `mqtt://${host}:${port}`,
  options: {
    clientId: `newtest`,
    username: "nithila",
    password: "nithila2003",
    reconnectPeriod: 1000,
    connectTimeout: 4000,
    clean: true,
  },
  topics_publish,
  topics_subscribe,
};

module.exports = configuration;

console.log("Hello Wicked World");

const env = process.env;

export const nodeEnv = env.NODE_ENV || "development";

export const logPounds = function (message) {
  console.info("########");
  console.info(message);
  console.info("########");
};

export default {
  port: env.PORT || 8080,
  //binds to all the IPs on this machine
  host: env.HOST || "0.0.0.0",
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  },
};

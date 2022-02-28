import express from "express";
import config from "config";
import log from "./logger";
import connect from "./db/connect";
import routes from "./routes";

const port = config.get("port") as number;
const host = config.get("host") as string;

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.listen(port, host, () => {
  log.info(`Server is listening at http://${host}:${port}`);
  connect();

  routes(server);
});

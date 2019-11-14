import * as express from "express";
import redisClient from "./utils/redis-client";
const PORT = process.env.PORT || 3000;
const app = express();
app.get("/", async (_, res) => {
  try {
    const count = Number(await redisClient.getAsync("count")) || 0;
    await redisClient.setAsync("count", count + 1);
    return res.send(`<h1>Current count from redis ... ${count}</h1>`);
  } catch (e) {
    return res.send("Looks like redis error...");
  }
});
app.listen(PORT, () => {
  console.log(`APP start on internal ${PORT} PORT`);
});

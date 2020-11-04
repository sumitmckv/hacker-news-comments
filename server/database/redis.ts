import Redis from "ioredis";

export default class RedisClient {
    redis?: Redis.Redis;

    connect(): void {
        if (this.redis) {
            return;
        }
        
        this.redis = new Redis(process.env.REDIS_URI);
        console.log("Connected to redis!!");
    }

    disconnect(): void {
        if (this.redis) {
            this.redis.disconnect();
            console.log("Disconnected redis!!");
        }
    }
}
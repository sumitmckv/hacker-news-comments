import { Redis } from "ioredis";

declare global {
   namespace Express {
      export interface Request {
         redis: Redis
      }
   }
}
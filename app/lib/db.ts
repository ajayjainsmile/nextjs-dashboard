import mongoose from "mongoose";

export async function connectDB() {
  const MONGODB_URI = process.env.MONGODB_URI!;
  if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}
 let cached = (global as any).mongoose || { conn: null, promise: null };
 if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;

}

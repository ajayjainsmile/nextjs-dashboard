import Replicate from "replicate";
import { connectDB } from "@/app/lib/db";
import Image from "@/app/models/Image";

export async function POST(req: Request) {
  const { image } = await req.json();
  await connectDB();

  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN!,
  });

  const output = await replicate.run(
    "stability-ai/sdxl",
    {
      input: {
        image,
        prompt: "professional product photo, white background, studio lighting"
      }
    }
  );

  await Image.create({
    originalImage: image,
    generatedImage: output
  });

  return Response.json({ success: true, image: output });
}

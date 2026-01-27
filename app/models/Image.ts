import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  userId: String,
  originalImage: String,
  generatedImage: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Image ||
mongoose.model("Image", ImageSchema);

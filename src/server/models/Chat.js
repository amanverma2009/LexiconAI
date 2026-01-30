import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      default: "New Chat",
    },
    userId: {
      type: String,
      default: null,
    },
    lastMessageAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Chat || mongoose.model("Chat", ChatSchema);

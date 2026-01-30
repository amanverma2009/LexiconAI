import { NextResponse } from "next/server";
import { connectDB } from "@/server/lib/mongodb";
import Chat from "@/server/models/Chat";

export async function GET() {
  try {
    await connectDB();
    const chats = await Chat.find()
      .sort({ updatedAt: -1 })
      .select({ title: 1, updatedAt: 1 })
      .lean();

    const payload = chats.map((chat) => ({
      id: chat._id.toString(),
      title: chat.title,
      updatedAt: chat.updatedAt,
    }));

    return NextResponse.json({ chats: payload });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Failed to load chats." },
      { status: 500 }
    );
  }
}

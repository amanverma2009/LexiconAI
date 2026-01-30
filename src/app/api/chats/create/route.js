import { NextResponse } from "next/server";
import { connectDB } from "@/server/lib/mongodb";
import Chat from "@/server/models/Chat";

export async function POST(request) {
  try {
    const body = await request.json();
    await connectDB();

    const title = body?.title?.trim() || "New Chat";
    const chat = await Chat.create({
      title,
      lastMessageAt: null,
    });

    return NextResponse.json({
      chat: {
        id: chat._id.toString(),
        title: chat.title,
        updatedAt: chat.updatedAt,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Failed to create chat." },
      { status: 500 }
    );
  }
}

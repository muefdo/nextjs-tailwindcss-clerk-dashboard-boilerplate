import { createMessage, getMessages } from "@/dbActions/message-actions";
import { currentUser, auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await currentUser();
    if (!user) {
      return new NextResponse("User not exist", { status: 404 });
    }

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const ticketId = searchParams.get("ticketId");

    if (!ticketId) {
      return new NextResponse("Ticket ID is required", { status: 400 });
    }
    const messages = await getMessages(ticketId);

    return new NextResponse(JSON.stringify(messages), { status: 200 });
  } catch (error) {
    return new NextResponse("Error retrieveing tickets", { status: 500 });
  }
}

export async function POST(req: NextRequest, res: Response) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await currentUser();
    if (!user) {
      return new NextResponse("User not exist", { status: 404 });
    }

    const body = await req.json();

    const { ticketId, content } = body;
    if (!ticketId || !content) {
      return new NextResponse("Ticket ID and content are required", {
        status: 400,
      });
    }

    const message = await createMessage(ticketId, content);

    return new NextResponse("Go", { status: 200 });
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
}

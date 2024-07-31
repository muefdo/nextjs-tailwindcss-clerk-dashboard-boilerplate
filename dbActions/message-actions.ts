import { PrismaClient } from "@prisma/client";
import { currentUser, auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function createMessage(ticketId: string, content: string) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await currentUser();
    if (!user) {
      return new NextResponse("User not exist", { status: 404 });
    }

    const dbUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!dbUser) {
      return new NextResponse("User not exist", { status: 404 });
    }

    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
    });

    if (!ticket) {
      return new NextResponse("Ticket not exist", { status: 404 });
    }

    const senderType = dbUser.userType === "admin" ? "admin" : "user";

    const newMessage = await prisma.message.create({
      data: {
        sender: senderType,
        content,
        ticketId,
      },
    });

    if (newMessage) {
      return new NextResponse("Message created", { status: 200 });
    } else return new NextResponse("Failed to create message", { status: 500 });
  } catch (error) {
    console.error("Error creating message:", error);
    return new NextResponse("Error", { status: 500 });
  }
}

export async function getMessages(ticketId: string) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await currentUser();
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const dbUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!dbUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    const dbTicket = await prisma.ticket.findUnique({
      where: {
        id: ticketId,
      },
      include: {
        messages: true,
      },
    });

    if (!dbTicket) {
      return new NextResponse("Ticket not found", { status: 404 });
    }

    const messages = dbTicket.messages;

    return messages;
  } catch (error) {
    console.error("Error fetching messages:", error);
    return new NextResponse("Error", { status: 500 });
  }
}

export async function deleteMessage(messageId: string) {
  try {
    const deletedMessage = await prisma.message.delete({
      where: { id: messageId },
    });

    if (deletedMessage) {
      return new NextResponse("Message deleted", { status: 200 });
    } else return new NextResponse("Message not found", { status: 404 });
  } catch (error) {
    console.error("Error deleting message:", error);
    return new NextResponse("Error", { status: 500 });
  }
}

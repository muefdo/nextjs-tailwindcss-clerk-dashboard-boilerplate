// user-actions.ts

import { PrismaClient } from "@prisma/client";
import { currentUser, auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function getUser() {
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
      where: { clerkId: user.id },
    });

    if (!dbUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(dbUser), { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return new NextResponse("Error", { status: 500 });
  }
}

export async function updateUser(name: string, lastName: string) {
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
      where: { clerkId: user.id },
    });

    if (!dbUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    const updatedUser = await prisma.user.update({
      where: { id: dbUser.id },
      data: {
        name,
        lastName,
      },
    });

    if (updatedUser) {
      return new NextResponse("User updated", { status: 200 });
    } else return new NextResponse("User not found", { status: 404 });
  } catch (error) {
    console.error("Error updating user:", error);
    return new NextResponse("Error", { status: 500 });
  }
}

export async function getUserType() {
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
      where: { clerkId: user.id },
    });

    if (!dbUser) {
      return new NextResponse("User not found", { status: 404 });
    }


    



    
    return dbUser.userType;
  } catch (error) {
    console.error("Error fetching user:", error);
    return new NextResponse("Error", { status: 500 });
  }
}

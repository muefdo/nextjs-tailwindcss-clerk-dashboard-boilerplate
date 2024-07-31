import { NextResponse } from 'next/server';
import { currentUser, auth } from '@clerk/nextjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  // Get user's information
  const user = await currentUser();
  if (!user) {
    return new NextResponse('User not exist', { status: 404 });
  }

  let dbUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
  });

  const isAdmin = dbUser?.userType === 'admin';

  if (isAdmin) {
    return new NextResponse('Hello admin', { status: 200 });
  }
  // Perform your Route Handler's logic with the returned user object

  return new NextResponse(null, {
    status: 302, // 302 Found - temporary redirect
    headers: {
      Location: 'https://localhost:3000/dashboard',
    },
  });
}

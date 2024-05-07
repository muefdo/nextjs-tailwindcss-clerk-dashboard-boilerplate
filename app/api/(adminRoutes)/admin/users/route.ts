import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET(req: any) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('false', { status: 404 });
    }

    return new NextResponse('true', { status: 200 });
  } catch (error) {
    return new NextResponse('Error retrieveing tickets', { status: 500 });
  }
}

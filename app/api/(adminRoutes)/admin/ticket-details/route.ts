import {
  createTicket,
  getTicketWithId,
  getTickets,
} from '@/dbActions/ticket-actions';
import { currentUser, auth } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: any) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const projectId = searchParams.get('projectId');
    const ticketId = searchParams.get('ticketId');

    // console.log("projectId", ticketId);

    let tickets;

    if (!ticketId && projectId) {
      tickets = await getTickets(projectId);
    }
    if (ticketId) {
      tickets = await getTicketWithId(ticketId);
    }

    return new NextResponse(JSON.stringify(tickets), { status: 200 });
  } catch (error) {
    return new NextResponse('Error retrieveing tickets', { status: 500 });
  }
}

export async function POST(req: NextRequest, res: Response) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const user = await currentUser();
    if (!user) {
      return new NextResponse('User not exist', { status: 404 });
    }

    const requestBody = await req.json(); // Parse the request body

    const { projectId, title, messages, category, priority } = requestBody;
    const newTicket = await createTicket(
      projectId,
      title,
      messages,
      priority,
      category
    );

    return new NextResponse('Go', { status: 200 });
  } catch (error) {
    return new NextResponse('Error', { status: 500 });
  }
}

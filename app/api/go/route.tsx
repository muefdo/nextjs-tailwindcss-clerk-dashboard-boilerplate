import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect('https://go.bradi.tech/dashboard');
}

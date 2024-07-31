import { getUserType } from "@/dbActions/user-actions";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("false", { status: 404 });
    }

    const userType = await getUserType();
    return new NextResponse(JSON.stringify(userType), { status: 200 });
  } catch (error) {
    return new NextResponse("Error retrieveing tickets", { status: 500 });
  }
}

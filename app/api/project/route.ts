import { createProject, getProjects } from '@/dbActions/project-actions';
import { currentUser, auth } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';

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
    const { projectName, projectInfo, projectUrl, techStack } = requestBody;

    // Now you can use projectName, projectInfo, projectUrl, and techStack

    const response = createProject(
      projectName,
      projectInfo,
      projectUrl,
      techStack
    );

    return new NextResponse('Go', { status: 200 });
  } catch (error) {
    return new NextResponse('Error', { status: 500 });
  }
}
export async function GET() {
  try {
    const projects = await getProjects();
    return new NextResponse(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    return new NextResponse('Error', { status: 500 });
  }
}

import { authMiddleware } from '@clerk/nextjs';

// Configure middleware
const middleware = authMiddleware({
  // Allow signed out users to access the specified routes
  publicRoutes: ['/api/new-user', '/'],
});

// Export middleware
export default middleware;

// Export additional configuration
export const config = {
  // Define routes to protect
  matcher: [
    // Exclude static files and Next.js internals
    '/((?!.+\\.[\\w]+$|_next).*)',
    // Include protected routes
    '/dashboard',
    '/api/((?!.+\\.[\\w]+$|_next).*)',
    // Add any other routes you want to protect here
  ],
};

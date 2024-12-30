import { NextRequest, NextResponse } from 'next/server';
import { THEME_COOKIE_KEY } from './themes/use-theme';

export function middleware(request: NextRequest) {
  const theme = request.cookies.get(THEME_COOKIE_KEY)?.value || '';

  const response = NextResponse.next();
  response.headers.set('x-theme', theme);

  return response;
}

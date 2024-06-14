import { cookies } from 'next/headers';

interface UserCookies {
  loginedId: number;
  accessToken: string;
}

export const ANONYMOUS_USER_ID = 0;
export const isAnonymousUser = (userId: number): boolean =>
  userId === ANONYMOUS_USER_ID;

export const getUserCookies = (): UserCookies => {
  const userIdCookie = cookies().get('userId');
  const accessTokenCookie = cookies().get('accessToken');

  const loginedId = userIdCookie?.value
    ? ANONYMOUS_USER_ID
    : Number(userIdCookie?.value);
  const accessToken = accessTokenCookie?.value ?? '';

  return { loginedId, accessToken };
};

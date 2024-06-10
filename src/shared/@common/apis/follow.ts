import getClientCookies from '@/shared/@common/utils/getClientCookies';
import { API_FOLLOW } from './constants/API';

interface UserFollowProps {
  userId: number;
}
/**
 * 유저 팔로우
 */
export const postUserFollow = (data: UserFollowProps) => {
  const { accessToken } = getClientCookies();
  return fetch(API_FOLLOW.FOLLOW, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
};

/**
 * 유저 언팔로우
 */
export const deleteUserFollow = (data: UserFollowProps) => {
  const { accessToken } = getClientCookies();
  return fetch(API_FOLLOW.FOLLOW, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
};

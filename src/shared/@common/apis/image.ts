import getClientCookies from '@/shared/@common/utils/getClientCookies';
import { API_IMAGE } from './constants/API';

/**
 * 이미지
 */
export const postImage = (data: FormData) => {
  const { accessToken } = getClientCookies();
  return fetch(API_IMAGE.UPLOAD, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
    },
    body: data,
  });
};

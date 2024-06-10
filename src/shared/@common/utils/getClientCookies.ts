import { getCookie } from 'cookies-next';

const getClientCookies = () => {
  const accessToken = getCookie('accessToken') ?? '';
  const loginedId = Number(getCookie('userId'));

  return { accessToken, loginedId };
};

export default getClientCookies;

import { getCookie } from 'cookies-next';

const useClientCookies = () => {
  const accessToken = getCookie('accessToken') ?? '';
  const loginedId = Number(getCookie('userId'));

  return { accessToken, loginedId };
};

export default useClientCookies;

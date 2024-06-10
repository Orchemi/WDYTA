import { getCookie } from 'cookies-next';

const useClientCookies = () => {
  const accessToken = getCookie('accessToken') ?? '';

  return { accessToken };
};

export default useClientCookies;

import { useCookies } from 'next-client-cookies';

const useClientCookies = () => {
  const cookies = useCookies();

  const setCookie = (name: string, value: string, options?: any) => {
    cookies.set(name, value, options);
  };

  const getCookie = (name: string) => {
    return cookies.get(name);
  };

  return { setCookie, getCookie };
};

export default useClientCookies;

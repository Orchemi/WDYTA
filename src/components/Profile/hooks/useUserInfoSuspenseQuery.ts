import { getUserInfo } from '@/shared/@common/apis';
import { API_USERS } from '@/shared/@common/apis/constants/API';
import { useSuspenseQuery } from '@tanstack/react-query';

function useUserInfoSuspenseQuery(userId: number) {
  return useSuspenseQuery({
    queryKey: [API_USERS, userId],
    queryFn: async () => {
      if (!userId) return null;
      const response = await getUserInfo(userId);
      return response.json();
    },
  });
}

export default useUserInfoSuspenseQuery;

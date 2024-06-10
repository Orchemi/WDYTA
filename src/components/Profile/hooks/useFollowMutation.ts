import { API_USERS } from '@/shared/@common/apis/constants/API';
import { postUserFollow } from '@/shared/@common/apis/follow';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export interface FollowMutationProps {
  currentProfileId: number;
}
const useFollowMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ currentProfileId }: FollowMutationProps) => {
      const response = await postUserFollow({ userId: currentProfileId });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      return response;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [API_USERS] }),
  });
};

export default useFollowMutation;

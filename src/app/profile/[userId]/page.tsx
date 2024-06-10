import { getQueryClient } from '@/app/getQueryClient';
import { ProfilePageComponent } from '@/components/Profile';
import { getUserInfo } from '@/shared/@common/apis';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

interface ProfileProps {
  params: {
    userId: string;
  };
}
export default function Profile({ params }: ProfileProps) {
  const { userId } = params;
  const queryClient = getQueryClient();

  queryClient.prefetchQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      if (!userId) return null;
      const response = await getUserInfo(Number(userId));
      return response.json();
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProfilePageComponent />
    </HydrationBoundary>
  );
}

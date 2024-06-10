import { ActivitySection } from '@/components/Profile/ActivitySection';
import { ProductSection } from '@/components/Profile/ProductSection';
import { ProfileCard } from '@/components/Profile/ProfileCard';
import { Floating } from '@/shared/ui/Button/Floating';

export const ProfilePageComponent = () => {
  return (
    <main className="flex justify-center items-start md:flex-col mobile:flex-col md:items-center mobile:items-center md:min-w-[509px] mobile:min-w-[335px] lg:gap-[70px] gap-[60px] py-[52px] lg:px-[20px] md:px-[100px] mobile:px-[21px] ">
      <ProfileCard />
      <div className="flex flex-col grow lg:gap-[80px] gap-[60px] max-w-[940px] md:w-full mobile:w-full">
        <ActivitySection />
        <ProductSection />
      </div>
      <Floating />
    </main>
  );
};

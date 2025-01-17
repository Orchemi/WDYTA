import { Icon } from '@/shared/ui/Icon';
import { IconType } from '@/shared/ui/Icon/types/iconType';

const SNS_MAP: { name: IconType }[] = [
  { name: 'GoogleIcon' },
  { name: 'KakaoIcon' },
];

const SocialLogin = () => {
  return (
    <div className="flex flex-col gap-5 mt-[40px]">
      <span className="text-sm lg:text-base font-normal text-gray-6E">
        SNS로 바로 시작하기
      </span>
      <div className="flex gap-5">
        {SNS_MAP.map((item) => (
          <div
            key={item.name}
            className="w-14 h-14 p-[14px] rounded-full border border-solid border-gray-6E flex items-center justify-center"
          >
            <Icon
              name={item.name}
              className="w-full h-full text-gray-6E cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLogin;

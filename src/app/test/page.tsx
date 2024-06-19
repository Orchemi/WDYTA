import Image from 'next/image';

const Page = () => {
  const imageUrl =
    'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/185/1718715368139/KakaoTalk_Photo_2024-06-18-19-50-34.jpeg';

  return (
    <div style={{ position: 'relative', width: '100px', height: '100px' }}>
      <Image src={imageUrl} alt="" fill sizes="auto" />
    </div>
  );
};

export default Page;

"use client";
import Icon from "../../shared/ui/Icon/Icon";

//테스트
const Profile = () => {
  const onClick = () => {
    console.log("a");
  };
  return (
    <>
      <Icon
        name="StarIcon"
        width="300"
        height="300"
        color="#F2F3F7"
        onClick={onClick}
      />
      <span>4.9</span>
    </>
  );
};

export default Profile;

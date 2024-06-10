import { create } from 'zustand';

interface UserInfoData {
  id: number;
  nickname: string;
  description: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  teamId: string;
  isFollowing: boolean;
  followersCount: number;
  followeesCount: number;
  reviewCount: number;
  averageRating: number;
  mostFavoriteCategory: string | null;
}

interface ProfileState {
  userInfoData: UserInfoData;
  setUserInfoData: (data: UserInfoData) => void;
}

export const useUserInfoStore = create<ProfileState>((set) => ({
  userInfoData: {
    id: 0,
    nickname: '',
    description: '',
    image: '',
    createdAt: '',
    updatedAt: '',
    teamId: '',
    isFollowing: false,
    followersCount: 0,
    followeesCount: 0,
    reviewCount: 0,
    averageRating: 0,
    mostFavoriteCategory: '',
  },
  setUserInfoData: (data: UserInfoData) => set({ userInfoData: data }),
}));

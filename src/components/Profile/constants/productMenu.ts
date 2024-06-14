import { Option } from '@/shared/ui/Dropdown/Sort';

export const TAB_NAMES_ORIGIN = {
  reviewedProduct: 'reviewedProduct',
  createdProduct: 'createdProduct',
  favoriteProduct: 'favoriteProduct',
};

export type ProductMenuType = keyof typeof TAB_NAMES_ORIGIN;

export const TAB_NAMES: Record<ProductMenuType, string> = {
  reviewedProduct: '리뷰 남긴 상품',
  createdProduct: '등록한 상품',
  favoriteProduct: '찜한 상품',
};

export const PRODUCT_MENU = Object.values(TAB_NAMES);

export const PRODUCT_TAB_OPTIONS: Option[] = Object.entries(TAB_NAMES).map(
  ([value, label]) => ({
    value,
    label,
  }),
);

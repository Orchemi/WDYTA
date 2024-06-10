'use client';

import { MenuDropdown } from '@/components/Profile/ProductSection/MenuDropdown';
import { ProductList } from '@/components/Profile/ProductSection/ProductList';
import { PRODUCT_MENU } from '@/components/Profile/constants/PRODUCT_MENU';
import useProductsQuery from '@/components/Profile/hooks/useProductsQuery';
import { ProductMenuType } from '@/components/Profile/types/productType';
import { useState } from 'react';

interface ProductSectionProps {
  currentProfileId: number;
}

export const ProductSection = ({ currentProfileId }: ProductSectionProps) => {
  const [activeMenu, setActiveMenu] =
    useState<ProductMenuType>('리뷰 남긴 상품');

  const handleClickTab = (tab: ProductMenuType) => {
    setActiveMenu(tab);
  };

  const { productsList, content } = useProductsQuery(
    currentProfileId,
    activeMenu,
  );

  return (
    <section className="flex flex-col gap-[30px]">
      <div className="!p-0 lg:hidden">
        <MenuDropdown
          options={PRODUCT_MENU.map((menu) => ({
            value: menu,
            label: menu,
          }))}
          onSelect={(value) => setActiveMenu(value)}
        >
          {activeMenu}
        </MenuDropdown>
      </div>
      <ul className="flex gap-[40px] text-gray-6E lg:text-xl text-lg mobile:hidden md:hidden">
        {PRODUCT_MENU.map((tab) => (
          <li key={tab}>
            <button
              type="button"
              className={`${activeMenu === tab ? 'text-white' : ''}`}
              onClick={() => handleClickTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      <ProductList productsList={productsList} content={content} />
    </section>
  );
};

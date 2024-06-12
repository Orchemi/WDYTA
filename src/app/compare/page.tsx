'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { AutoComplete } from '@/components/Compare/AutoComplete';
import { Table } from '@/components/Compare/Table';
import { PRODUCT_ID_1_MOCK } from '@/components/Compare/mock/PRODUCT_ID_1_MOCK';
import { Button, ButtonKind } from '@/shared/ui/Button/Button/Button';
import { Floating } from '@/shared/ui/Button/Floating/Floating';
import { CompareColor } from '@/shared/ui/Chip/CompareChip';
import { Loading } from '@/shared/ui/Icon';
import { useEffect, useState } from 'react';
import { useCompareItems } from '@/stores/useCompareItems';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  favoriteCount: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  writerId: number;
  isFavorite: boolean;
  category: {
    id: number;
    name: string;
  };
  categoryMetric: {
    rating: number;
    favoriteCount: number;
    reviewCount: number;
  };
}

const Compare = () => {
  const router = useRouter();
  const { firstItem, changingFirstItem, secondItem, changingSecondItem } =
    useCompareItems();
  const [isCompare, setIsCompare] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [firstName, setFirstName] = useState<string>('');
  const [secondName, setSecondName] = useState<string>('');

  // const userId = cookies().get('accessToken');
  const searchParams = useSearchParams();
  const product1 = searchParams.get('product1');
  const product2 = searchParams.get('product2');

  // api로 product의 id를 이용해서 product1은 product의 name을 받아와야 하는 것이다.

  const handleSelectFirstProduct = (id: number) => {
    changingFirstItem(id);
  };

  const handleSelectSecondProduct = (id: number) => {
    changingSecondItem(id);
  };

  useEffect(() => {
    if (product1) {
      const parsedProduct1 = parseInt(product1, 10);
      if (!Number.isNaN(parsedProduct1)) {
        const fetchProductDetail = async () => {
          try {
            const productDetail: Product = PRODUCT_ID_1_MOCK;
            changingFirstItem(productDetail.id);
            setFirstName(productDetail.name);
            console.log('첫번째는', firstName);
          } catch (error) {
            console.error('Failed to fetch product detail:', error);
          }
        };
        fetchProductDetail();
      }
    }
  }, []);

  useEffect(() => {
    if (product2) {
      const parsedProduct2 = parseInt(product2, 10);
      if (!Number.isNaN(parsedProduct2)) {
        const fetchProductDetail = async () => {
          try {
            const productDetail: Product = PRODUCT_ID_1_MOCK;
            changingSecondItem(productDetail.id);
            setSecondName(productDetail.name);
          } catch (error) {
            console.error('Failed to fetch product detail:', error);
          }
        };
        fetchProductDetail();
      }
    }
  }, []);

  const handleCompareClick = () => {
    if (!firstItem || !secondItem) {
      return;
    }

    router.push(`/compare?product1=${firstItem}&product2=${secondItem}`);
    setIsCompare(true);
    setIsLoad(true);
  };

  return (
    <>
      <div className="flex justify-center gap-5 w-full mt-[60px] h-[400px] mobile:flex-col mobile:items-center">
        <div className="flex flex-row gap-5 mobile:flex-col">
          <div className="flex flex-col items-start gap-[10px]">
            <p className="text-base text-white">상품 1</p>
            <AutoComplete
              color={CompareColor.GREEN}
              onSelectProduct={handleSelectFirstProduct}
              selectedProduct={firstName}
            />
          </div>
          <div className="flex flex-col items-start gap-[10px]">
            <p className="text-base text-white">상품 2</p>
            <AutoComplete
              onSelectProduct={handleSelectSecondProduct}
              selectedProduct={secondName}
            />
          </div>
        </div>
        <div className="mt-">
          <Button
            kind={ButtonKind.primary}
            customSize="w-[200px] h-[70px] mt-[34px] w-[200px] md:w-[164px] mobile:w-[288px]"
            onClick={() => handleCompareClick()}
          >
            비교하기
          </Button>
        </div>
      </div>
      {isCompare && (
        <div className="flex flex-col items-center gap-5">
          <Loading />
          <p className=" text-xl align-center text-gray-6E">Loading...</p>
        </div>
      )}
      {isLoad && (
        <Table
          selectedFirstProductId={firstItem}
          selectedSecondProductId={secondItem}
        />
      )}

      <Floating />
    </>
  );
};

export default Compare;

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface CompareItemsState {
  firstItem: number;
  changingFirstItem: (id: number) => void;
  removeFirstItem: () => void;
  secondItem: number;
  changingSecondItem: (id: number) => void;
  removeSecondItem: () => void;
}

export const useCompareItems = create<CompareItemsState>()(
  devtools(
    (set) => ({
      firstItem: 0,
      changingFirstItem: (id) => set(() => ({ firstItem: id })),
      removeFirstItem: () => set(() => ({ firstItem: 0 })),
      secondItem: 0,
      changingSecondItem: (id) => set(() => ({ secondItem: id })),
      removeSecondItem: () => set(() => ({ secondItem: 0 })),
    }),
    { name: 'CompareItemsStore' },
  ),
);

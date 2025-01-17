export interface SearchInput {
  search: string;
}

export interface GnbSearchBarProps {
  isOpenMobileSearchBar: boolean;
  handleToggledSearchBar: () => void;
}

export interface GnbSearchButtonProps {
  handleToggledSearchBar: () => void;
}

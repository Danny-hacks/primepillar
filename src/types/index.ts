export type PageId = 'home' | 'properties' | 'detail' | 'services' | 'about' | 'newsletter' | 'contact';

export type PropertyStatus = 'buy' | 'rent';
export type PropertyType = 'Villa' | 'Apartment' | 'House' | 'Land' | 'Commercial';

export interface Property {
  id: number;
  title: string;
  location: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  beds: number;
  baths: number;
  area: number;
  amenities: string[];
  desc: string;
  img: string;
  imgFull: string;
  ref: string;
  year: number;
  featured?: boolean;
  tag?: string;
}

export interface FilterState {
  status: string;
  type: string;
  location: string;
  minPrice: string;
  maxPrice: string;
  beds: string;
  amenities: string[];
  sort: 'newest' | 'price-asc' | 'price-desc' | 'beds';
}

export interface NavState {
  page: PageId;
  detailId?: number;
  filterStatus?: string;
  filterType?: string;
}

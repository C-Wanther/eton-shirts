interface RetailImage {
  mediaKey: string;
  source: string;
  updatedAt: string;
}

interface ColorLink {
  colorId: string;
  colorName: string;
  displayId: number;
  inStock: boolean;
  retailImage: RetailImage;
  uri: string;
}

interface Price {
  discountPercent: number;
  formattedPrice: string;
  formattedPriceBeforeDiscount: string;
  price: number;
  priceBeforeDiscount: number;
  priceListId: number;
  showAsNew: boolean;
  showAsOnSale: boolean;
}

interface Image {
  mediaKey: string;
  source: string;
  updatedAt: string;
}

interface RetailImages {
  collar: Image;
  cuff: Image;
  detail: Image;
  flatlay: Image;
  gallery: Image;
  hover: Image;
  thumbnail: Image;
}

interface ProductVariant {
  articleNumber: string;
  bodyfitId: string;
  bodyfitName: string;
  id: number;
  isAvailableCustomMade: boolean;
  price: Price;
  priceGroup: string;
  retailImages: RetailImages;
}

export interface Shirt {
  colorLinks: ColorLink[];
  id: number;
  name: string;
  productVariants: ProductVariant[];
  type: string;
  uri: string;
}

interface FacetData {
  availableCustomMadeCount: number;
  bodyfits: string | null;
  centraCategories: string[] | null;
  collars: string[] | null;
  colors: string[] | null;
  cuffs: string[] | null;
  fabrics: string[] | null;
  patterns: string[] | null;
}

export interface Data {
  displays: Shirt[];
  facetData: FacetData;
  totalCount: number;
}

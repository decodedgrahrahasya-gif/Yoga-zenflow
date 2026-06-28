export interface LocalizedText {
  en?: string;
  hi?: string;
  [key: string]: string | undefined;
}

export interface Page {
  _id?: string;
  title: LocalizedText;
  slug: string;
  content?: PageBlock[] | string | any;
  metaTitle?: LocalizedText;
  metaDescription?: LocalizedText;
  isPublished: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  status?: string; 
  type?: string;
  template?: string;
  isHomepage?: boolean;
}
  export interface ContentItem {
  id?: string;
  type: string;
  props?: any;
  content?: any[];
  _id?: string;
}


export interface PageBlock {
  id: string;
  type: string;
   props?: any;
  layout: string;
  adminTitle?: string; // Identifier for sections/subsections
 content?: (PageBlock | ContentItem | any)[];
  columns?: any[][]; // New field for multi-column mapping
}

export interface PagesState {
  items: Page[]
  currentPage: Page | null
  loading: boolean
  error: string | null
}

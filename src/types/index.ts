export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  packaging: string[];
  shelfLife: string;
  useCases: string[];
  image: string;
}

export interface InquiryFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  productInterest: string[];
  quantity: string;
  message: string;
}

export interface USP {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ExportCapability {
  id: string;
  title: string;
  description: string;
  icon: string;
}
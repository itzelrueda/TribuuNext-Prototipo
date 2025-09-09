export enum Screen {
  WELCOME,
  COMPANY_LIST,
  COMPANY_DETAIL,
}

export interface Company {
  id: number;
  name: string;
  logoUrl: string;
  description: string;
  industry: string;
  location: string;
  vacancies: { title: string; type: string }[];
}

export interface ClickCounts {
  start: number;
  details: number;
  contact: number;
}
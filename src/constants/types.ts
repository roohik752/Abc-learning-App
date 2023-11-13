export interface IPage {
  image: any;
  title: string;
  description: string;
  button: string;
}

export interface ILanguage {
  name_country?: string;
  language: string;
  code: Language_Code;
}

export enum Language_Code {
  ENGLISH = 'en',
  BENGALI = 'ben',
  GUJRATI = 'guj',
  Hindi = 'hi',
  KANNADA = 'kan',
  MARATHI = 'ma',
  TAMIL = 'ta',
  TELUGU = 'tel',
  URDU = 'ur',
}

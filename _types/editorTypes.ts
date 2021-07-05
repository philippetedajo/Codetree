export interface LanguagePropsInterface {
  data: string;
  transformer: string;
}

export interface IObjectKeys {
  [key: string]: LanguagePropsInterface;
}

export interface LanguagesInterface extends IObjectKeys {
  javascript: LanguagePropsInterface;
  css: LanguagePropsInterface;
  html: LanguagePropsInterface;
}

export interface EditorValueInterface {
  name: string;
  description: string;
  public: boolean;
  languages: LanguagesInterface;
}

export enum LagnShort {
  EN = "en",
  RU = "ru",
  UZ = "uz",
  OZ = "oz",
  KK = "kk",
  QQ = "qq",
}

export enum LagnLong {
  EN = "English",
  RU = "Русский",
  UZ = "O’zbekcha",
  OZ = "Өзбекча",
  KK = "Қарақалпақша",
  QQ = "Qaraqalpaqsha",
}

export interface ILagn {
  value: LagnShort;
  label: LagnLong;
}

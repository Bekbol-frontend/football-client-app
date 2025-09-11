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
  RU = "Russian",
  UZ = "Uzbek",
  OZ = "Озбек",
  KK = "Қарақалпақ",
  QQ = "Qaraqalpaq",
}

export interface ILagn {
  value: LagnShort;
  label: LagnLong;
}

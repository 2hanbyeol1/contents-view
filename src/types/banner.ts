export type BannerStatusType = '종료' | '진행 중' | `D-${number}`;

export type BannerType = {
  src: string;
  name: string;
  date: [Date, Date];
  btn: string;
  url: string;
};

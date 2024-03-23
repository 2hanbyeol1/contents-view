export type NewsType = {
  url: string;
  title: string;
};

export type PhotoNewsType = NewsType & {
  src: string;
};

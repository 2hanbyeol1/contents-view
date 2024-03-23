export type EventType = {
  src: string;
  name: string;
  date: [Date, Date];
  btn: EventMethodType;
  url: string;
  winner?: string;
};

export type EventMethodType = '응모하기' | '투표하기' | '참여하기';

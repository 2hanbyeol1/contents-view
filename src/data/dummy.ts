import img from '../assets/banner-1.png';

export const banners: {
  src: string;
  name: string;
  date: [Date, Date];
  btn: string;
  url: string;
}[] = [
  {
    src: img,
    name: '[M COUNTDOWN] 10월 2주차 엠카 글로벌 사전 투표',
    date: [new Date('2024.03.19 10:00'), new Date('2024.03.24 10:00')],
    btn: '투표하기',
    url: 'https://twitter.com/Whosfan_Ofcl/status/1276379826962612224',
  },
  {
    src: 'https://tkfile.yes24.com/upload2/PerfBlog/202209/20220922/20220922-43607_1.jpg',
    name: '[지정석] 2022 창원 K-POP WORLD FESTIVAL',
    date: [new Date('2022.10.07 19:00'), new Date('2022.10.07 21:30')],
    btn: '예매하기',
    url: 'http://m.ticket.yes24.com/Perf/Detail/PerfInfo.aspx?IdPerf=43607',
  },
  {
    src: 'https://pbs.twimg.com/media/GBCCBLFaYAAkEqS?format=png&name=4096x4096',
    name: '🎉✨ 2023 서울콘 X WORLD K-POP FESTIVAL - COUNTDOWN🎉✨',
    date: [new Date('2023.12.31 18:00'), new Date('2024.01.01 06:00')],
    btn: '',
    url: 'https://twitter.com/worldkpopfest/status/1734030353038487739',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F81FLl%2FbtsDDWeXzEy%2FesrBjhbYJzRJj1K9DScXR1%2Fimg.jpg',
    name: '2024 IU H.E.R. WORLD TOUR CONCERT IN YOKOHAMA',
    date: [new Date('2024.03.23 17:00'), new Date('2024.03.24 16:00')],
    btn: '',
    url: 'https://iu-live2024-yokohama.com/ja/',
  },
];

export const chart_items: {
  id: string;
  src: string;
  name: string;
  artist: string;
}[] = [
  {
    id: '1777748',
    src: 'https://resource.hanteochart.io/album/900523925_s150.jpg?now=1710873620973',
    name: '첫 만남은 계획대로 되지 않아',
    artist: '투어스',
  },
  {
    id: '1779486',
    src: 'https://resource.hanteochart.io/album/900523958_s150.jpg?now=1710873620973',
    name: '나는 아픈 건 딱 질색이니까',
    artist: '(여자)아이들',
  },
  {
    id: '1782643',
    src: 'https://resource.hanteochart.io/album/900525700_s150.jpg?now=1710873620973',
    name: '밤양갱',
    artist: '비비',
  },
  {
    id: '1782630',
    src: 'https://resource.hanteochart.io/album/900524679_s150.jpg?now=1710873620973',
    name: 'EASY',
    artist: '르세라핌',
  },
  {
    id: '1780155',
    src: 'https://resource.hanteochart.io/album/900524874_s150.jpg?now=1710873620973',
    name: 'Love wins all',
    artist: '아이유',
  },
];

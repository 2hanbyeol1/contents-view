import { FreeChargeInfoType, ChargePriceInfoType } from '../types/charge';

export const CHARGE_PRICE_INFO: ChargePriceInfoType[] = [
  { num: 265, price: 1200 },
  { num: 1200, price: 4900 },
  { num: 2250, price: 8900 },
  { num: 5450, price: 21000 },
];

export const FREE_CHARGE_INFO: FreeChargeInfoType[] = [
  {
    num: 91,
    src: 'https://search.pstatic.net/sunny/?src=http%3A%2F%2Fpds.saramin.co.kr%2Fcompany%2Flogo%2F202005%2F26%2Fqaxmbd_ea6d-1kko8uq_logo.png&type=l340_110',
    url: 'https://www.kakaocorp.com/page/service/service/KakaoTalk',
    title: '한터글로벌 카카오톡 채널',
    condition: '카카오플러스 친구 완료',
  },
  {
    num: 1230,
    src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5575%2F2023%2F07%2F26%2F0000396911_001_20230726084203279.jpeg&type=sc960_832',
    url: 'https://www.hanteochart.com/',
    title: '한터차트',
    condition: '다운로드',
  },
  {
    num: 2250,
    src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F014%2F2021%2F02%2F19%2F0004587419_001_20210219164920796.jpg&type=l340_165',
    url: 'https://whosfan.io/?lang=ko',
    title: '후즈팬',
    condition: '회원가입',
  },
  {
    num: 1320,
    src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5575%2F2022%2F12%2F13%2F0000338779_001_20221213080805565.jpeg&type=sc960_832',
    url: '',
    title: 'HANTEO MUSIC AWARDS 2022',
    condition: '1차 투표 참여',
  },
];

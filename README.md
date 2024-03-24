# React로 구현하는 콘텐츠 뷰

## 개발 기간

2023.03.20 - 2023.03.24

<br/>

## 주요 기술

- 코어: `React`, `Typescript`
- 스타일링: `SCSS`

<br/>

## 패키지 구조

- **assets**
  : 이미지 파일
- **components**
  : 프로젝트 전반적으로 재사용되는 **공통 컴포넌트**와 각 페이지 별로 필요한 **기능별 컴포넌트**

  ```
  ./src/components
  ├── charge
  │   ├── freeCharge
  |   │   ├── FreeChargeItem.scss
  |   │   ├── FreeChargeItem.tsx
  |   │   ├── FreeChargeSection.scss
  |   │   └── FreeChargeSection.tsx
  │   └── paidCharge
  |   │   ├── PaidChargeItem.scss
  |   │   ├── PaidChargeItem.tsx
  |   │   └── PaidChargeSection.tsx
  ├── chart
  ├── error
  ├── event
  ├── news
  ├── store
  ├── whook
  |
  └── common
      ├── Card.scss
      ├── Card.tsx
      ├── Footer.scss
      ├── Footer.tsx
      ├── Header.scss
      ├── Header.tsx
      ├── Tab.scss
      └── Tab.tsx
  ```

- **constants**
  : 상수
- **data**
  : dummy 데이터
- **hooks**
  : 커스텀 훅
- **layout**
  : 레이아웃 파일
- **pages**
  : 라우팅을 적용할 때 필요한 **각 카테고리 별 페이지**과 **에러 페이지**

  ```
  ./src/pages
  ├── chart
  │   ├── 100
  |   │   └── Chart100.tsx
  │   └── Chart.tsx
  ├── charge
  ├── event
  ├── news
  ├── store
  ├── whook
  |
  └── error
      ├── NotFound.scss
      └── NotFound.tsx
  ```

- **types**
  : 타입

<br/>

## 공통 컴포넌트

|     이름      |                                                                    이미지                                                                    | 설명                                                                                                                                           |
| :-----------: | :------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------- |
|     헤더      |  <img width='425' src='https://github.com/2hanbyeol1/contents-view/assets/78421872/8e44f60d-6a86-4dc8-a8b5-e972e45e1dbb' alt='header-img'>   | 화면 최상단의 헤더입니다<br/>ux를 개선하기 위해, 현재 보여지고 있는 카테고리명을 상단에 두고 나머지 카테고리들을 nav 슬라이더에 보여주었습니다 |
|     푸터      |  <img width="425" alt="footer-img" src="https://github.com/2hanbyeol1/contents-view/assets/78421872/0021b853-0daf-44c9-abaa-c25e48e532e1">   | 화면 최하단의 푸터입니다                                                                                                                       |
| 리스트 아이템 | <img width="425" alt='list-item-img' src='https://github.com/2hanbyeol1/contents-view/assets/78421872/0e2400d8-dd39-47d0-9889-e1876e2ea1e1'> | 가장 기본적인 리스트 아이템입니다                                                                                                              |
|     카드      |   <img width="425" alt='card-img' src='https://github.com/2hanbyeol1/contents-view/assets/78421872/084c9b33-a3e0-4805-92c5-3c09208ab034'>    | 카드 리스트 아이템입니다                                                                                                                       |
|     모달      |   <img width="425" alt="modal-img" src="https://github.com/2hanbyeol1/contents-view/assets/78421872/a3b71e0e-1ff5-48c5-b05f-f26fee49f718">   | 모달입니다                                                                                                                                     |
|      탭       |    <img width="425" alt="tab-img" src="https://github.com/2hanbyeol1/contents-view/assets/78421872/0bc6daa4-726e-439c-b9c7-d174f6cedd2c">    | 탭 입니다                                                                                                                                      |
|     버튼      |        <img src='https://github.com/2hanbyeol1/contents-view/assets/78421872/1d947fa8-d58b-49bf-8a4c-789168e56359' alt='button-img'>         | 버튼입니다                                                                                                                                     |

<br/>

## 화면

공통 컴포넌트인
`Header`, `Footer`와
`MainLayout`에서 관리하여 반복되는 코드를 없앴습니다.

<br/>

### 📊 차트 페이지

<img width="425" alt="chart-page" src="https://github.com/2hanbyeol1/contents-view/assets/78421872/c56818bc-95d7-4efc-b484-5bdf943a03e2">

<br/>

> ### 배너
>
> <img width='425' src='https://github.com/2hanbyeol1/contents-view/assets/78421872/dba06ad2-1dac-476c-8382-54ca2ad458d6' alt='banner-img'>
>
> - [x] 슬라이드형
> - [x] 4개의 배너로 구성
> - [x] 무한 루프
> - [x] 클릭 시 외부 링크 이동
> - 하단의 네비게이션 바를 이용해서 조작 가능
> - 현재 날짜(2024-03-23 기준)와 비교하여 배너에 진행 여부 표시.
> - 진행 여부에 따라 배경 색상 조절

<br/>

> ### 뮤직 차트
>
> <img width='425' src='https://github.com/2hanbyeol1/contents-view/assets/78421872/83fd1278-ccd9-4769-8f63-8ddb6a45b3f6' alt='music-chart-img'>
>
> - [x] 무한 스크롤 가능

<br/>

### 🗨️ Whook 페이지

<img width="425" alt="whook-page" src="https://github.com/2hanbyeol1/contents-view/assets/78421872/f7b725fc-b314-43e6-823d-4ca589c08ee0">

- [x] 무한 스크롤 가능
- 클릭 시 채팅방 참여 여부를 묻는 모달 생성
  -> 참여 버튼 클릭 시 채팅방(미구현)으로 이동

<br/>

### 🎉 이벤트 페이지

<img width="425" alt="event-page" src="https://github.com/2hanbyeol1/contents-view/assets/78421872/219e7c2d-3c3b-48fa-9b02-8ff3782b7bcb">

- [x] 무한 스크롤 가능

<br/>

### 📰 뉴스 페이지

<img width="425" alt="news-page" src="https://github.com/2hanbyeol1/contents-view/assets/78421872/5cce32fb-ae22-4728-8a8c-0105d1c4b6ef">

<br/>

### 🏪 스토어 페이지

|                                                       코인 스토어                                                       |                                                       크레딧 스토어                                                       |
| :---------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: |
| ![coin-store-section](https://github.com/2hanbyeol1/contents-view/assets/78421872/4131f4b7-087b-4c9a-b0da-046dfd0752d4) | ![credit-store-section](https://github.com/2hanbyeol1/contents-view/assets/78421872/20d12365-70c1-464e-80a1-89f838ced252) |

<br/>

### 🔋 충전소 페이지

|                                                       무료 충전소                                                        |                                                       유료 충전소                                                        |
| :----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: |
| ![free-charge-section](https://github.com/2hanbyeol1/contents-view/assets/78421872/8e5bfead-5ebf-4547-b00b-53d6d2f26722) | ![paid-charge-section](https://github.com/2hanbyeol1/contents-view/assets/78421872/a61fb4ec-1c76-49d7-8a85-763fce20c19b) |

- [x] 무한 스크롤 가능

<br/>

### ⚠️ 404 에러

<img width="425" alt="error-page" src="https://github.com/2hanbyeol1/contents-view/assets/78421872/eae8e094-4fb9-4b61-827e-fea57b15c5b9">

- 돌아가기 버튼을 누르면 이전 화면으로 이동
- 메인화면 버튼을 누르면 메인(차트)화면으로 이동

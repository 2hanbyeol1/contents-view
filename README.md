# React로 구현하는 콘텐츠 뷰

## 개발 기간

2023.03.20 - 2023.03.24

## 주요 기술

- 코어: `React`, `Typescript`
- 스타일링: `SCSS`

## 패키지 구조

- **assets**
  : 이미지 파일
- **components**
  : 프로젝트 전반적으로 재사용되는 **공통 컴포넌트**와 각 페이지/섹션 별로 필요한 컴포넌트 **기능별 컴포넌트**

  ```
  ./src/components
  ├── charge
  │   ├── freeCharge
  |   │   ├── FreeChargeItem.scss
  |   │   └── FreeChargeItem.tsx
  │   └── paidCharge
  |       ├── PaidChargeItem.scss
  |       └── PaidChargeItem.tsx
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
  : 라우팅을 적용할 때 필요한 **각 카테고리 별 페이지 및 섹션**과 **에러 페이지**

  ```
  ./src/pages
  ├── charge
  │   ├── section
  |   │   ├── FreeChargeSection.scss
  |   │   ├── FreeChargeSection.tsx
  |   │   └── PaidChargeSection.tsx
  │   ├── Charge.scss
  │   └── userApiSlice.ts
  ├── chart
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

## 요구사항

- [x] React 를 사용하여 구현 해주세요.

- [x] 카테고리 - “차트”, “Whook”, “이벤트”, “뉴스”, “스토어”, “충전소” 별로 동일한 리스트 페이지가 구현 되어야 합니다.

- [x] 카테고리에 속한 콘텐츠는 리스트형 뷰로 구성되고, 무한 스크롤이 가능한 형태입니다.

- [x] 카테고리간 이동은 상단의 탭 메뉴 클릭과, 좌<->우 슬라이드 터치를 통해서만 가능합니다.

- [x] 중단의 배너 영역은 슬라이드형이며, 최소 3개의 배너로 구성하고 무한루프 동작 및 외부 링크 이동이 가능해야 합니다.

- [x] 해상도는 width 425px 에 최적화 합니다.

- [x] 세로형 콘텐츠 - 순위 영역의 콘텐츠는 임의로 구현하시면 됩니다.

## 공통 컴포넌트

### 헤더

### 푸터

<img width="234" alt="footer-img" src="https://github.com/2hanbyeol1/contents-view/assets/78421872/0021b853-0daf-44c9-abaa-c25e48e532e1">

### 카드

hover 시 애니메이션, 그림자 색상 변경

### 탭

|                                                                                                                |                                                                                                                |
| :------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: |
| ![Tab-img-1](https://github.com/2hanbyeol1/contents-view/assets/78421872/ac4cd28f-c83c-4180-890e-a91f63dd79dd) | ![Tab-img-2](https://github.com/2hanbyeol1/contents-view/assets/78421872/eb19f9dc-9158-4769-8c3b-a93bc6abdfe2) |

## 화면

1. 공통 컴포넌트
   Header, Footer
   `MainLayout`에서 관리

2. 반응형
3. hover animation

### 📊 차트

<img width="234" alt="chart-page" src="https://github.com/2hanbyeol1/contents-view/assets/78421872/1fb2e9bc-edd6-4508-9bea-2111b877905a">

#### 배너

|                                                      종료                                                       |                                                       진행 중                                                        |                                                        예정                                                        |
| :-------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------: |
| ![banner-end](https://github.com/2hanbyeol1/contents-view/assets/78421872/a2ebd0bd-1851-49f8-8554-e62103d98885) | ![banner-progress](https://github.com/2hanbyeol1/contents-view/assets/78421872/7d895cfe-f619-4d68-a298-18c670a200c5) | ![banner-expect](https://github.com/2hanbyeol1/contents-view/assets/78421872/97e30457-e692-4afd-99d0-eda29bae0324) |

- 현재 날짜(2024-03-23 기준)와 비교하여 배너에 진행 여부 표시.
- 진행 여부에 따라 배경 색상 조절

### 🗨️ Whook

### 🎉 이벤트

### 📰 뉴스

<img width="234" alt="news-page" src="https://github.com/2hanbyeol1/contents-view/assets/78421872/5cce32fb-ae22-4728-8a8c-0105d1c4b6ef">

### 🏪 스토어

### 🔋 충전소

|                                                       무료 충전소                                                        |                                                       유료 충전소                                                        |
| :----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: |
| ![free-charge-section](https://github.com/2hanbyeol1/contents-view/assets/78421872/8e5bfead-5ebf-4547-b00b-53d6d2f26722) | ![paid-charge-section](https://github.com/2hanbyeol1/contents-view/assets/78421872/8d6007db-bd4e-49df-b913-93201a43b68f) |

### ⚠️ 404 에러

<img width="234" alt="error-page" src="https://github.com/2hanbyeol1/contents-view/assets/78421872/eae8e094-4fb9-4b61-827e-fea57b15c5b9">

돌아가기 버튼을 누르면 이전 화면으로, 메인화면 버튼을 누르면 메인(차트)화면으로 이동합니다.

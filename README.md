# pre-onboarding-9th-2-3 과제 제출

<p>
<img alt="Typescript" src="https://img.shields.io/badge/Typescript-v4.9.4-3178C6?style=plastic&logoColor=white%22/%3E"/>
<img alt="React" src="https://img.shields.io/badge/React-v18.2.0-61DAFB?style=plastic&logo=react&logoColor=white"/>
<img alt="React Router" src="https://img.shields.io/badge/React Router-v6.8.0-CA4245?style=plastic&logo=reactrouter&logoColor=white"/>
</p>

## 실행 방법

---

```sh
git clone // this repository
cd this file location
npm install
npm run dev
```

## 선정이유

```
1. vite를 써서 일반적인 번들링과정을 생략하여 보다 빠르게 설치 가능
2. axios쓴 이유 => 기존보다 편하며 반복되는 코드 줄일 수 있음
3. 파일구조와 컴포넌트를 세분화 시켜 가독성과 재사용성을 향상
4. 타입스크립트를 사용하여 코드의 오류를 컴파일 단계에서 잡음
5. 가독성을 높이기 위해 순수함수를 작성하려고 노력
6. 확장성을 고려하여 정규표현식 사용해서 유효성 검사를 진행
7. 사용자 경험을 증대시키기 위해 confirm을 사용하여 안전장치 생성, 할 일 추가 후 입력창 비움
8. prettier,eslint,husky를 사용함으로써 코드컨벤션을 맞춤
```

## 배포 사이트

---

[바로가기](http://s3-deploy-cicd.s3-website.ap-northeast-2.amazonaws.com/)

## 👨‍💻 팀원

---

| [강명훈](https://github.com/michoball) | [김진영](https://github.com/tbs01215)  |  [백유리](https://github.com/BaekYuri)  | [김유신](https://github.com/kysclient) |
| :------------------------------------: | :------------------------------------: | :-------------------------------------: | :------------------------------------: |
| [최명식](https://github.com/mysungsik) | [안윤경](https://github.com/skyhanull) | [구본아](https://github.com/bona373737) | [김재욱](https://github.com/WooGie911) |

## 구현 요구사항 목록

1. 유저가 페이지를 처음 열었을 때 “/main”에 도착하도록 만들어주세요
     - [x] main에는 여행 상품 정보 (mock JSON) 를 활용하여 여행 상품 정보를 노출해야합니다.
         - [x] 리스트에서 노출해야 하는 정보: `idx, name, mainImage, price, spaceCategory`
     - [x] 예약 버튼을 달아 예약 버튼을 클릭시 여행 상품 장바구니에서 사용 할 수 있도록 상품 데이터
    를 저장해주세요.
    - [x] 여행 상품 정보를 클릭했을 때 여행 상품을 자세히 볼 수 있는 모달창을 제작해주세요
        - [x] 모달에서 노출해야 하는 정보: `idx, name, mainImage, description, spaceCategory, price, maximumPurchases, registrationDate`
2. 여행 상품 리스트의 가격(price), 공간(spaceCategory) 필터 기능을 만들어주세요.
    - [x] [예시) [ `0~1000`, `1500~3000`](가격)
    - [x] [예시) [ 서울, 부산] (공간)
    - [x] 개별 필터링과, 다중 필터링이 모두 가능하도록 구현해주세요
3. 여행 상품 장바구니 (/reservations)를 만들어주세요.
    - [x] 저장한 여행 상품의 리스트를 보여주고 삭제가 가능할 수 있도록 구성해주세요.
    - [x] 여행 상품의 구매 수량을 변경 가능할 수 있도록 해주세요.
    - [x] 장바구니에 있는 여행 상품의 총 결제액 수를 계산하여 표시해주세요
    
    
## 파일구조
```
📦src
 ┣ 📂api
 ┃ ┗ 📜travelApi.tsx
 ┣ 📂components
 ┃ ┣ 📂filter
 ┃ ┃ ┗ 📜SelectBox.tsx
 ┃ ┣ 📂modal
 ┃ ┃ ┗ 📜CardModal.tsx
 ┃ ┣ 📂reservation
 ┃ ┃ ┣ 📜CheckoutItem.tsx
 ┃ ┃ ┗ 📜ReservationList.tsx
 ┃ ┣ 📂trip
 ┃ ┃ ┣ 📜TripCard.tsx
 ┃ ┃ ┗ 📜TripList.tsx
 ┃ ┗ 📂ui
 ┃ ┃ ┗ 📜logo.tsx
 ┣ 📂pages
 ┃ ┣ 📜MainPage.tsx
 ┃ ┣ 📜NavigationPage.tsx
 ┃ ┣ 📜NotFoundPage.tsx
 ┃ ┗ 📜ReservationPage.tsx
 ┣ 📂store
 ┃ ┣ 📂cart
 ┃ ┃ ┣ 📜cartSelector.ts
 ┃ ┃ ┗ 📜cartSlice.ts
 ┃ ┣ 📂trip
 ┃ ┃ ┣ 📜tripSelector.ts
 ┃ ┃ ┗ 📜tripSlice.ts
 ┃ ┗ 📜store.ts
 ┣ 📂utils
 ┃ ┗ 📜dateConvertor.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜Type.ts
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┣ 📜setupTests.ts
 ┗ 📜vite-env.d.ts
```

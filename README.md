# ✈️ 라이크어로컬 pre-onboarding-9th-2-3 과제 제출

<p>
<img alt="Typescript" src="https://img.shields.io/badge/Typescript-v4.9.4-3178C6?style=plastic&logoColor=white%22/%3E"/>
<img alt="React" src="https://img.shields.io/badge/React-v18.2.0-61DAFB?style=plastic&logo=react&logoColor=white"/>
<img alt="React Router" src="https://img.shields.io/badge/React Router-v6.8.0-CA4245?style=plastic&logo=reactrouter&logoColor=white"/>
</p>

## ✍ 실행 방법

---

```sh
git clone // this repository
cd this file location
npm install
npm run dev
```

## 배포 사이트

[바로가기](https://pre-onboarding-9th-2-3.vercel.app/)

## 🎆 발전된 부분

```
1. 초기설계 (데이터 구조 및 폴더구조)를 확실히 했다.
2. 단일 책임 원칙과 개방 폐쇄 원칙을 지키는 클린 코드를 사용하려 노력
3. 페이지와 재사용 가능한 컴포넌트의 역할 분리 - 가독성 증가
4. 기능별 구현 후 PR을 통해 코드 리뷰 후 merge 진행
```

## 🎓 Best Practice

### 1. 공통

    a. Redux slice 관심사 분리
        - trip과 reservation 두개로 나눔

### 2. 메인 페이지

    a. 여행 상품 정보 노출
        - 확장성을 고려하여 axios를 이용해 mock JSON 받아오는 api 작성
        - redux thunk를 이용해 비동기 처리
    b. 필터
        - 필터 로직 재사용을 위해 지역별, 가격별 필터링 함수 별개로 작성
    c. 모달
        - chakra ui내의 모달 컴포넌트를 불러와서 예약 상품 컴포넌트에서 호출

### 3. 예약 페이지

    a. localStorage를 활용한 persistence 유지
    b. 구매수량 변경 가능 및 리스트 삭제 가능
    c. 여행 상품의 총 결제액 계산

### 4. 구조 분리

    pages =>    a. page 의 전체적인 레이아웃 설정
                b.각 컴포넌트들의 집합용도

    components =>   a. 재사용 가능성이 존재하는 컴포넌트들의 모듈화된 집합
                    b. 실제 화면에 구현되는 컴포넌트

    store =>    a. 상태관리가 필요한 데이터들의 저장
                b. selector 내에 데이터 전처리 로직 생성

    utils =>    a. 앱 전반적으로 공통사용할 로직

### 5. 주요 로직

<br/>

#### a. 필터링

```typescript
export const searchedTripLists = createSelector([selectCartReducer], trips => {
const { searchCategory, tripList } = trips
const { priceRange, selectSpace } = searchCategory

const spacesortedTripList = tripList.filter(trip => {
    return selectSpace.length ? selectSpace.includes(trip.spaceCategory) : trip
})

return spacesortedTripList.filter(
    list => list.price >= priceRange[0] && list.price <= priceRange[1]
)
})
```

<br/>

#### b. 예약 하기

```typescript
const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addReservationList: (state, action: PayloadAction<ITripInfo>) => {
      const newReservationItems = addReservationItem(
        state.reservationItems,
        action.payload
      )
      setLocalStorageItem('reservation', newReservationItems)
      state.reservationItems = newReservationItems
    },
    //... 중략
  }
}
````

#### c. 총 결제액 & 예약 상품 수량 계산

```typescript
// 총 결제액
export const selectReservationTotal = createSelector(
  [selectReservationItems],
  reservationItems =>
    reservationItems.reduce(
      (total, reservationItem) =>
        total + reservationItem.quantity * reservationItem.price,
      0
    )
)
// 예약 상품 수량 계산
export const selectReservationCount = createSelector(
  [selectReservationItems],
  reservationItems =>
    reservationItems.reduce(
      (total, reservationItem) => total + reservationItem.quantity,
      0
    )
)
```

## 👨‍💻 팀원

---

| [강명훈](https://github.com/michoball) | [김진영](https://github.com/tbs01215)  |  [백유리](https://github.com/BaekYuri)  | [김유신](https://github.com/kysclient) |
| :------------------------------------: | :------------------------------------: | :-------------------------------------: | :------------------------------------: |
| [최명식](https://github.com/mysungsik) | [안윤경](https://github.com/skyhanull) | [구본아](https://github.com/bona373737) | [김재욱](https://github.com/WooGie911) |

## 📝 구현 요구사항 목록

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

## 🗂️ 파일구조

```

📦src
┣ 📂api
┃ ┗ 📜tripApi.tsx
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
┣ 📂data
┃ ┗ 📜mock_data.json
┣ 📂pages
┃ ┣ 📜MainPage.tsx
┃ ┣ 📜NavigationPage.tsx
┃ ┣ 📜NotFoundPage.tsx
┃ ┗ 📜ReservationPage.tsx
┣ 📂store
┃ ┣ 📂reservation
┃ ┃ ┣ 📜reservationSelector.ts
┃ ┃ ┗ 📜reservationSlice.ts
┃ ┣ 📂trip
┃ ┃ ┣ 📜tripSelector.ts
┃ ┃ ┗ 📜tripSlice.ts
┃ ┗ 📜store.ts
┣ 📂utils
┃ ┣ 📜dateConvertor.ts
┃ ┗ 📜localStorage.ts
┣ 📜App.css
┣ 📜App.tsx
┣ 📜Type.ts
┣ 📜index.css
┣ 📜main.tsx
┣ 📜setupTests.ts
┗ 📜vite-env.d.ts


```

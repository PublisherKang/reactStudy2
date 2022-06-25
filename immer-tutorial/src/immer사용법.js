import produce from "immer";

// const nextState = produce(originalState, (draft) => {
//   //바꾸고싶은 값
//   draft.somewhere.deep.inside = 5;

//   //첫번째 파라미터는 수정하고싶은 상태
//   //두번째 파라미터는 상태를 어떻게 업데이트 할것인지 정의하는 함수
// });

const originalState = [
  {
    id: 1,
    todo: "전개와 연산자와 배열 내장함수로 불변성 유지하기",
    checked: true,
  },
  {
    id: 2,
    todo: "immer로 불변성 유지하기",
    checked: false,
  },
];

const nextState = produce(originalState, (draft) => {
  // id가 2인 항목의 checked 값을 true로 설정

  const todo = draft.find((t) => t.id === 2);
  todo.checked = true;

  // 배열에 새로운 데이터 추가

  draft.push({
    id: 3,
    todo: "일정 관리 앱에 immer 적용하기",
    checked: false,
  });

  // id = 1인 항목을 제거하기
  draft.splice(
    draft.findIndex((t) => t.id === 1),
    1
  );
});

//스토어를 만들때는 import를 넣어 불러와야한다.
import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

//액션 정의, 액션 이름은 문자열로, 중복 방지를 위해 고유한 이름으로 대문자를 사용한다.
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수 정의
// 리듀서는 변화를 일으키는 함수
// 파라미터로 state와 action 값을 받아옴
function reducer(state = initialState, action) {
  //action.type에 따라 다른 작업을 처리함.
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성을 유지한다.
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };

    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

const render = () => {
  const state = store.getState();
  //토글처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  counter.innerHTML = state.counter;
};

render();

//상태가 업데이트 될때마다 render함수 호출
store.subscribe(render);

//구족하기
const listener = () => {
  console.log("상태가 업데이트 됨");
};
const unsubscrible = store.subscribe(listener);

unsubscrible();

//액션 발생시키기

divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};

btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
  store.dispatch(decrease(1));
};

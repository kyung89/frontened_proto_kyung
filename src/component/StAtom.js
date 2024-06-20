import { atom } from "recoil";

// [회원정보관리]

// isLogin: 로그인 상태
export const isLogin = atom({
  key: "isLogin",
  default: false,
});

// userDataState: 사용자 정보 전체
export const userDataState = atom({
  key: "userDataState",
  default: null,
});

import { atom } from "recoil";

// [회원정보관리]

// isLogin: 로그인 상태
export const isLogin = atom({
  key: "isLogin",
  default: false,
});

// username: 사용자 이름
// export const username = atom({
//   key: "username",
//   default: "",
// });

// profileImage: 사용자 프로필 이미지
// export const profileImage = atom({
//   key: "profileImage",
//   default: null,
// });

// userDataState: 사용자 정보 전체
// : 위의 username과 profileImage 는 따로 관리하지 않고 이 항목 하나로 관리 가능할 듯
export const userDataState = atom({
  key: "userDataState",
  default: null,
});

// 나중에 교수님께 질문: token을 recoil로 관리하는 것이 과연 좋은가
export const tokenState = atom({
  key: "tokenState",
  default: null,
});

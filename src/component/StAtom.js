import { atom } from "recoil";
export const isLogin = atom({
    key : "isLogin",
    default : false
});
export const username = atom({
    key : "username",
    default : "",
})
export const profileImage = atom({
    key: 'profileImage',
    default: null,
});

export const userDataState = atom({
    key: 'userDataState',
    default: {},
  });
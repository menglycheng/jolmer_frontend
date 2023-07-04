import { atom } from "recoil";

export const activeTabState = atom({
  key: "activeTabState",
  default: "userDetailTab",
});

export const userAuthState = atom({
  key: "userAuthState",
  default: { isLogin: false, user: {}, accessToken: "", refreshToken: "" },
});

export const userRegisterState = atom({
  key: "userRegisterState",
  default: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
});



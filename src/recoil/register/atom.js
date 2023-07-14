import { atom } from "recoil";

export const activeTabState = atom({
  key: "activeTabState",
  default: "userDetailTab",
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

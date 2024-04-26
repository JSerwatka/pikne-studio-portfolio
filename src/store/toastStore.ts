import { atom } from "nanostores";

export const isToastOpen = atom(false);
export const toastType = atom<"info" | "error">("info");
export const toastMessage = atom<string>("");

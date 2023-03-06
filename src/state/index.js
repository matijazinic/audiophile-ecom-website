import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const cartAtom = atomWithStorage("cart", []);
export const cartToggle = atom(false);
export const mobileToggle = atom(false);

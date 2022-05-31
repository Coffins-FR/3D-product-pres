import { atom } from "jotai";
export const selectedColor = atom({
  laces: "ffffff",
  mesh: "Orange",
  caps: "ffffff",
  inner: "ffffff",
  sole: "ffffff",
  stripes: "ffffff",
  band: "ffffff",
  patch: "ffffff",
});
export const selectedColorState = atom(
  (get) => get(selectedColor),
  (get, set, update) => {
    set(selectedColor, update);
  }
);

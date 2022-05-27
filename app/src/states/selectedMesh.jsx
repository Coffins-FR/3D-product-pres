import { atom } from "jotai";
export const selectedMesh = atom({ name: null });
export const getSelectedMesh = atom((get) => get(selectedMesh));
export const selectedMeshState = atom(
  (get) => get(selectedMesh),
  (get, set, update) => {
    set(selectedMesh, { name: update });
  }
);

import {create} from "zustand"

export const useScrollPosStore = create((set) => ({
    navPos: "me",
    me: false,
    skills: false,
    firstYear: false,
    secondYear: false,
    setMe: (newState) => set(() => ({me: newState})),
    setSkills: (newState) => set(() => ({skills: newState})),
    setFirstYear: (newState) => set(() => ({firstYear: newState})),
    setSecondYear: (newState) => set(() => ({secondYear: newState})),
    setNavPos: (newPos) => set(() => ({navPos: newPos}))
}))
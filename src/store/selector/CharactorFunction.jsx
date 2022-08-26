import { selector } from "recoil";
import { textState } from "../TextStore"

// 전역 함수
export const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const text = get(textState);

        return text.length;
    },
});
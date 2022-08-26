import { atom } from 'recoil'

// 전역 변수
export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

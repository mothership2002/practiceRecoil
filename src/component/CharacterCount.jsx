import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from '../store/selector/CharactorFunction'

function CharacterCount() {
    const count = useRecoilValue(charCountState);

    return <>Character Count: {count}</>;
}

export default CharacterCount
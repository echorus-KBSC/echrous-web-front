/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import styled from "@emotion/styled";
import { useState } from 'react';

import SearchBar from '../components/SearchBar';

const Search = () => {
    const [cardsData, setCardsData] = useState<any[]>([]);
    console.log(cardsData);
    return (
        <div
            css={css`
                display: flex;
                justify-content: center;
            `}
        >
            <SearchBar setCardsData={setCardsData} />
        </div>
    );
};

export default Search;

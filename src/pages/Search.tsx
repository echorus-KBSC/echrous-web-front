/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import Card from '../components/Card';

import SearchBar from '../components/SearchBar';
import { getAllCards } from '../lib/api';

const CardsGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 400px);
    grid-template-columns: repeat(4, 260px);
    gap: 44px;
    margin-bottom: 130px;
`;

const Search = () => {
    const [cardsData, setCardsData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            setCardsData(await getAllCards());
            setIsLoading(false);
        })();
    }, []);
    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
            `}
        >
            <SearchBar
                setCardsData={setCardsData}
                setIsLoading={setIsLoading}
            />
            {isLoading ? (
                <div
                    css={css`
                        width: 100%;
                        height: 1014px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 50px;
                        font-weight: bold;
                    `}
                >
                    <span>로딩중</span>
                </div>
            ) : cardsData.length === 0 ? (
                <div
                    css={css`
                        width: 100%;
                        height: 1014px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 50px;
                        font-weight: bold;
                    `}
                >
                    <span>검색 결과 없음</span>
                </div>
            ) : (
                <>
                    <CardsGrid>
                        {cardsData.map(data => (
                            <Card
                                imageURL={'https://' + data.image.substring(1)}
                                title={data.title}
                                description={data.description}
                                stat={data.stat}
                            />
                        ))}
                    </CardsGrid>
                    <div className="navigation"></div>
                </>
            )}
        </div>
    );
};

export default Search;

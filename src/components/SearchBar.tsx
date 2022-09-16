/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import React from 'react';

import searchLogo from '../images/search_logo.svg';
import searchIcon from '../images/icons/search-refraction.svg';

import { getCardsByTitle, getCardsByDescription } from '../lib/api';

const Bar = styled.div`
    display: flex;
`;
const Form = styled.form`
    display: flex;
    gap: 44px;
`;
const Checkboxes = styled.div`
    display: flex;
    align-items: center;
    gap: 21px;
`;

const TextInput = styled.input`
    padding: 21px;
    border: 2px solid #e8e8e8;
    border-radius: 10px;
    width: 300px;
    height: 58px;
`;

interface IformInputs {
    query: string;
    searchCriteria: 'name' | 'text';
}

interface Props {
    setCardsData: React.Dispatch<React.SetStateAction<any[]>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar = ({ setCardsData, setIsLoading }: Props) => {
    const { register, handleSubmit } = useForm<IformInputs>();
    const onFormSubmit = async (formData: IformInputs) => {
        if (formData.query === '') {
            alert('검색어를 입력하세요!');
            return;
        }
        if (formData.searchCriteria === 'name') {
            setIsLoading(true);
            const cardsData = await getCardsByTitle(formData.query);
            setIsLoading(false);
            setCardsData(cardsData);
            return;
        }
        if (formData.searchCriteria === 'text') {
            setIsLoading(true);
            const cardsData = await getCardsByDescription(formData.query);
            setIsLoading(false);
            setCardsData(cardsData);
            return;
        }

        console.log(formData);
    };
    return (
        <Bar>
            <img src={searchLogo} alt="search icon" />
            <Form onSubmit={handleSubmit(onFormSubmit)}>
                <Checkboxes
                    css={css`
                        margin-left: 30px;
                    `}
                >
                    <input
                        {...register('searchCriteria')}
                        type="radio"
                        id="search-by-name"
                        value="name"
                    />
                    <label htmlFor="search-by-name">이름으로 검색</label>
                    <input
                        {...register('searchCriteria')}
                        type="radio"
                        id="search-by-text"
                        value="text"
                    />
                    <label htmlFor="search-by-text">내용 텍스트로 검색</label>
                </Checkboxes>
                <TextInput
                    {...register('query')}
                    type="text"
                    placeholder="검색어를 입력하세요"
                    css={css`
                        margin-left: 44px;
                    `}
                />
                <button
                    type="submit"
                    css={css`
                        margin-left: 30px;
                        width: 54px;
                        height: 54px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: #2091f9;
                        border-radius: 10px;
                    `}
                >
                    <img src={searchIcon} alt="search-button-icon" />
                </button>
            </Form>
        </Bar>
    );
};

export default SearchBar;

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { UserActionBtns } from './UserActionBtns';

const LinkBtns = styled.div`
    width: 383px;
    display: flex;
    justify-content: space-between;
    gap: 21px;
`;

const LinkBtn = styled(Link)`
    display: block;
    padding: 10px;
`;

const Header = () => {
    return (
        <header
            css={css`
                width: 100vw;
                height: 155px;

                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 42px 20px;
            `}
        >
            <Link to="/">
                <img src={logo} alt="echorus logo" />
            </Link>
            <div
                css={css`
                    width: 713px;
                    height: 62px;

                    display: flex;
                    align-items: center;
                    padding: 0px;
                    gap: 44px;
                `}
            >
                <LinkBtns>
                    <LinkBtn to="/about">게임 소개</LinkBtn>
                    <LinkBtn to="/achievements">도전과제</LinkBtn>
                    <LinkBtn to="/search">카드 검색</LinkBtn>
                    <LinkBtn to="/about-team">팀 소개</LinkBtn>
                </LinkBtns>
                <UserActionBtns />
            </div>
        </header>
    );
};

export default Header;

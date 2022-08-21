/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const UserActionBtn = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 19px 38px;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    color: #fff;
`;

export const UserActionBtns = () => {
    const isLoggedIn = false;
    return (
        <div
            css={css`
                display: flex;
                gap: 24px;
            `}
        >
            {isLoggedIn ? (
                <></>
            ) : (
                <>
                    <UserActionBtn
                        to="/login"
                        css={css`
                            background-color: #2091f9;
                        `}
                    >
                        로그인
                    </UserActionBtn>
                    <UserActionBtn
                        to="/register"
                        css={css`
                            background-color: #00b976;
                        `}
                    >
                        회원 가입
                    </UserActionBtn>
                </>
            )}
        </div>
    );
};

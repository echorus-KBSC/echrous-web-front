/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import download from '../images/icons/download.svg';

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;
`;
const MainBlock = styled.main`
    display: flex;
    gap: 50px;
    height: 386px;
`;
const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`;
const TitleArea = styled.div``;
const Buttons = styled.div`
    display: flex;
    gap: 10px;
`;
const Button = styled(Link)`
    display: flex;
    gap: 10px;
    padding: 16px 50px;
    justify-content: center;
    align-items: center;
    background-color: #2091f9;
    border-radius: 10px;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #fff;
`;

const Main = () => {
    return (
        <MainContainer>
            <MainBlock>
                <TextArea>
                    <TitleArea>
                        <h3
                            css={css`
                                color: #2091f9;
                                font-size: 24px;
                                line-height: 36px;
                            `}
                        >
                            에코러스
                        </h3>
                        <h2
                            css={css`
                                font-size: 40px;
                                line-height: 57px;
                                color: #252b42;
                            `}
                        >
                            실제 데이터에 기반한 환경 시뮬레이션
                        </h2>
                        <p
                            css={css`
                                font-size: 24px;
                                line-height: 38px;
                                color: #737373;
                            `}
                        >
                            대한민국의 실제 통계 데이터를 기반으로 한 환경
                            시뮬레이터!
                            <br />
                            2100년까지 지속 가능한 대한민국을 이룰 수 있을까요?
                            <br />
                            당신의 손에 달렸습니다!
                        </p>
                    </TitleArea>
                    <Buttons>
                        <Button to="#">튜토리얼/개요</Button>
                        <Button to="#">
                            <img src={download} alt="downlaod icon" /> 게임
                            다운로드
                        </Button>
                    </Buttons>
                </TextArea>
                <img src="https://picsum.photos/500" />
            </MainBlock>
        </MainContainer>
    );
};

export default Main;

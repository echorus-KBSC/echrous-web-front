/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import detail from '../images/detail.jpg';

const MainTitleArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const MainConcept = styled.h3`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height, or 150% */

    text-align: center;
    letter-spacing: 0.1px;

    /* Primary */

    color: #2091f9;
`;

const MainTitle = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 57px;
    /* identical to box height, or 142% */

    text-align: center;
    letter-spacing: 0.2px;

    /* text */

    color: #252b42;
`;

const MainArea = styled.div`
    display: flex;
    align-items: center;
    gap: 64px;
`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const TitleArea = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const TitleText = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;

    letter-spacing: 0.1px;

    color: #252b42;
`;

const ColorNumber = styled.div`
    width: 55px;
    height: 55px;
    background: linear-gradient(39.97deg, #00f3b9 0.79%, #2187ff 79.29%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`;

const ContentText = styled.div`
    width: 322px;
    padding: 10px 0px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    /* or 175% */

    letter-spacing: 0.2px;

    /* second text */

    color: #737373;
`;

const AboutGame = () => {
    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 120px;
            `}
        >
            <MainTitleArea>
                <MainConcept>메인 컨셉트</MainConcept>
                <MainTitle>환경 시뮬레이션 에코러스</MainTitle>
            </MainTitleArea>
            <MainArea>
                <div>
                    <img
                        src={detail}
                        alt="detail image"
                        css={css`
                            width: 880px;
                            height: 530px;
                        `}
                    />
                </div>
                <ContentBox>
                    <div>
                        <TitleArea>
                            <ColorNumber>1</ColorNumber>
                            <TitleText>실제사례 기반의 카드</TitleText>
                        </TitleArea>
                        <ContentText>
                            환경부 고시자료, 통계청 공개자료는 물론 여러
                            논문들에서 환경 문제에 관한 자료들을 싹싹 긁어모아
                            카드 기획을 하였습니다.
                        </ContentText>
                    </div>
                    <div>
                        <TitleArea>
                            <ColorNumber>2</ColorNumber>
                            <TitleText>현실에서 가져온 수치</TitleText>
                        </TitleArea>
                        <ContentText>
                            팀 에코러스의 사람들은 카드를 만드는데에만 조사를
                            그치지 않았습니다.
                            <br />
                            카드에 포함된 수치 하나 하나를 만드는데도 현실의
                            수치와 여러 연구논문들을 적극적으로 참고하였습니다.
                        </ContentText>
                    </div>
                    <div>
                        <TitleArea>
                            <ColorNumber>3</ColorNumber>
                            <TitleText>정책의 유효기간</TitleText>
                        </TitleArea>
                        <ContentText>
                            현실의 정책은 하루아침만에 이루어 지지 않습니다.
                            그리고 골든 타임을 놓치면 아무것도 못하는 경우도
                            생기죠. 에코러스에도 이 점을 반영하기 위해서, 정책
                            카드의 유효기간 이라는 개념을 삽입하여, 현실성 있는
                            시뮬레이션을 구성하기 위해 노력하였습니다.
                        </ContentText>
                    </div>
                </ContentBox>
            </MainArea>
        </div>
    );
};

export default AboutGame;

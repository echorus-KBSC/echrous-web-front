/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import logo from '../images/logo.svg';
import huichan from '../images/kasterra-logo.jpg';
import hanyong from '../images/hanyong.jpg';
import noah from '../images/noah.jpg';
import hyunji from '../images/hyunji.jpg';
import yunsung from '../images/yunsung.jpg';
import jaeyong from '../images/jaeyong.jpg';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 96px;
`;
const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;
const TeamMateInfoArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;
const TeamMateInfoGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 100px;
`;
const TeamMateInfoCard = styled.div`
    & > img {
        width: 300px;
        height: 300px;
        border-radius: 10px;
        margin-bottom: 20px;
    }
    & > h3 {
        font-size: 24px;
        line-height: 36px;
        color: #2091f9;
        padding: 10px;
        text-align: center;
    }
    & > h5 {
        font-size: 16px;
        line-height: 24px;
        color: #737373;
        text-align: center;
    }
`;

const AboutTeam = () => {
    return (
        <MainContainer>
            <TitleArea>
                <h2>우리는 어떤 사람들이냐면...</h2>
                <img
                    src={logo}
                    alt="echorus logo"
                    css={css`
                        width: 672px;
                        height: 185px;
                    `}
                />
                <p
                    css={css`
                        margin-top: 26px;
                        font-size: 24px;
                        line-height: 36px;
                        text-align: center;
                    `}
                >
                    우리 팀 이름인 에코러스(Echorus)는 환경을 나타내는 영단어로
                    유명한 ecology와 조화를 나타내는 영단어인 chorus의 합성어
                    입니다.
                    <br />
                    우리는 인간과 자연이 조화롭게 사는 지속 가능한 사회를
                    꿈꿉니다.
                </p>
            </TitleArea>
            <TeamMateInfoArea>
                <h2>각자 이런 역할을 했어요</h2>
                <TeamMateInfoGrid>
                    <TeamMateInfoCard>
                        <img src={noah} alt="profile" />
                        <h3>명노아</h3>
                        <h5>기획</h5>
                    </TeamMateInfoCard>
                    <TeamMateInfoCard>
                        <img src={hanyong} alt="profile" />
                        <h3>김한용</h3>
                        <h5>유니티 클라이언트 개발</h5>
                    </TeamMateInfoCard>
                    <TeamMateInfoCard>
                        <img src={jaeyong} alt="profile" />
                        <h3>이재영</h3>
                        <h5>유니티 클라이언트 개발</h5>
                    </TeamMateInfoCard>
                    <TeamMateInfoCard>
                        <img src={yunsung} alt="profile" />
                        <h3>장윤성</h3>
                        <h5>서버, DB</h5>
                    </TeamMateInfoCard>
                    <TeamMateInfoCard>
                        <img src={huichan} alt="profile" />
                        <h3>이휘찬</h3>
                        <h5>웹 프론트엔드 & 디자인</h5>
                    </TeamMateInfoCard>
                    <TeamMateInfoCard>
                        <img src={hyunji} alt="profile" />
                        <h3>김현지</h3>
                        <h5>데이터 엔지니어</h5>
                    </TeamMateInfoCard>
                </TeamMateInfoGrid>
            </TeamMateInfoArea>
        </MainContainer>
    );
};

export default AboutTeam;

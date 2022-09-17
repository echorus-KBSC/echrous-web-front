/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Card = styled.div`
    display: flex;
    height: 70px;
    width: fit-content;
    align-items: center;
    gap: 27px;
    padding: 16px;
    background: #ffffff;

    border: 1px solid #22abf3;

    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
        0px 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    margin-left: 25px;
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

const CardTitle = styled.span`
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #000000;
`;

const CardContent = styled.span`
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #000000;
`;

interface Props {
    isFailure?: boolean;
    title: string;
    content: string;
}

const AchievementsCard = ({ isFailure, title, content }: Props) => {
    return (
        <Card
            css={
                isFailure &&
                css`
                    border-color: #e53e3e;
                `
            }
        >
            <CardTitle>{title}</CardTitle>
            <CardContent>{content}</CardContent>
        </Card>
    );
};

export default AchievementsCard;

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

const CardWrapper = styled.div`
    position: relative;
    width: 260px;
    height: 401px;
    display: flex;
    flex-direction: column;
    background: #ffffff;

    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
        0px 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
`;

const CardImageSection = styled.div`
    width: 100%;
    height: 150px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    img {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
`;

const CardTitle = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #000000;
    margin-top: 14px;
    margin-left: 12px;
    margin-bottom: 14px;
`;

const CardDescription = styled.div`
    width: 219px;
    height: 123px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-left: 20px;
    color: #718096;
`;

const CardStatArea = styled.div`
    position: absolute;
    bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`;

interface CardProps {
    imageURL: string;
    title: string;
    description: string;
    stat: {
        soil: number;
        air: number;
        radio: number;
        trash: number;
        ocean: number;
        approval: number;
        capital: number;
        product: number;
    };
}

const Card = ({ imageURL, title, description, stat }: CardProps) => {
    const renderStatObj = (statData: CardProps['stat']) => {
        const elements: ReactNode[] = [];
        Object.keys(statData).forEach((key, idx) => {
            if (statData[key as keyof CardProps['stat']] === 0) return;
            elements.push(
                <div
                    key={idx}
                    css={css`
                        display: flex;
                        gap: 5px;
                    `}
                >
                    <img
                        src={`/cardIcons/${key}.png`}
                        alt={key}
                        css={css`
                            width: 24px;
                            height: 24px;
                        `}
                    />
                    <span>{statData[key as keyof CardProps['stat']]}</span>
                </div>,
            );
        });
        return elements;
    };
    return (
        <CardWrapper>
            <CardImageSection>
                <img src={imageURL} alt="card image" width="260" height="150" />
            </CardImageSection>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <CardStatArea>{renderStatObj(stat)}</CardStatArea>
        </CardWrapper>
    );
};

export default Card;

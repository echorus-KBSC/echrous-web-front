/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { getAllAchievements } from '../lib/api';
import AchievementsCard from '../components/AchievementCard';

const GroupTitle = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 57px;
    margin-bottom: 30px;

    color: #252b42;
`;

const Achievements = () => {
    const { data, isLoading } = useQuery('achievements', getAllAchievements);
    return isLoading ? (
        <span>로딩중...</span>
    ) : (
        <div
            css={css`
                padding-left: 145px;
            `}
        >
            <GroupTitle>도전과제 - 성공 ✨</GroupTitle>
            {data![0].map(({ id, name, description }) => (
                <AchievementsCard key={id} title={name} content={description} />
            ))}
            <GroupTitle>도전과제 - 실패 💀</GroupTitle>
            {data![1].map(({ id, name, description }) => (
                <AchievementsCard
                    key={id}
                    isFailure={true}
                    title={name}
                    content={description}
                />
            ))}
        </div>
    );
};

export default Achievements;

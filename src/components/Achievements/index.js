import React from 'react';
import styled from 'styled-components';
import { achievements } from '../../data/constants';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 0px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AchievementsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 30px;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }
`;

const AchievementCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(133, 76, 230, 0.2);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(133, 76, 230, 0.5);
    box-shadow: 0 4px 20px rgba(133, 76, 230, 0.15);
    transform: translateY(-4px);
  }
`;

const IconWrapper = styled.div`
  font-size: 36px;
  min-width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(133, 76, 230, 0.1);
  border-radius: 12px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  line-height: 1.5;
`;

const CardDate = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  margin-top: 4px;
`;

const Achievements = () => {
  return (
    <Container id="achievements">
      <Wrapper>
        <Title>Achievements</Title>
        <Desc>
          Key milestones and accomplishments throughout my career.
        </Desc>
        <AchievementsGrid>
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <IconWrapper>{achievement.icon}</IconWrapper>
              <CardContent>
                <CardTitle>{achievement.title}</CardTitle>
                <CardDescription>{achievement.description}</CardDescription>
                <CardDate>{achievement.date}</CardDate>
              </CardContent>
            </AchievementCard>
          ))}
        </AchievementsGrid>
      </Wrapper>
    </Container>
  );
};

export default Achievements;

import React from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
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
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
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

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: var(--shadow);
  &:hover {
    transform: scale(1.07) perspective(1000px) rotateX(var(--rotateX)) rotateY(var(--rotateY) );
    box-shadow: var(--shadow-hover);
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  const handleMouseMove = (event, index) => {
    const card = document.getElementById(`skill-card-${index}`);
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    const rotateX = `${-y / 20}deg`;
    const rotateY = `${x / 20}deg`;
    const shadowX = `${x / 20}px`;
    const shadowY = `${y / 20}px`;

    card.style.setProperty('--rotateX', rotateX);
    card.style.setProperty('--rotateY', rotateY);
    card.style.setProperty('--shadow', `0px 10px 30px rgba(0, 0, 0, 0.9)`);
    card.style.setProperty('--shadow-hover', `${shadowX} ${shadowY} 30px rgba(0, 0, 0, 0.9)`);
  };

  const handleMouseLeave = (index) => {
    const card = document.getElementById(`skill-card-${index}`);
    card.style.setProperty('--rotateX', '0deg');
    card.style.setProperty('--rotateY', '0deg');
    card.style.setProperty('--shadow', '0px 10px 30px rgba(0, 0, 0, 0.9)');
    card.style.setProperty('--shadow-hover', '0px 10px 30px rgba(0, 0, 0, 0.9)');
  };

  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on for the past 2 years.
        </Desc>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill
              key={index}
              id={`skill-card-${index}`}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, idx) => (
                  <SkillItem key={idx}>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;

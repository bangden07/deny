import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const IntroText = styled.p`
  margin: 0 0 0.5rem 0;
  color: ${({ theme }) => theme.colors.text[200]};
`;

export const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ProjectTitle = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ProjectId = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
`;

export const ProjectName = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const ProjectDesc = styled.div`
  color: ${({ theme }) => theme.colors.text[200]};
`;

export const UsageText = styled.div`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.text[300]};
`;

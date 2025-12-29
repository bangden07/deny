import styled from "styled-components";

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  .info-section {
    min-width: 0;
  }

  .illu-section {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const PreName = styled.pre`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.55rem;
  line-height: 1.15;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const PreNameMobile = styled.pre`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.35rem;
  line-height: 1.1;
  overflow-x: auto;
`;

export const PreWrapper = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`;

export const PreImg = styled.pre`
  margin: 0;
  color: ${({ theme }) => theme.colors.text[300]};
  font-size: 0.85rem;
  line-height: 1.15;
`;

export const Seperator = styled.div`
  color: ${({ theme }) => theme.colors.text[300]};
  margin: 0.75rem 0;
`;

export const Cmd = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
`;

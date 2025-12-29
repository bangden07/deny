import styled from "styled-components";

// Markbull theme colors
const colors = {
  yellow: '#ffce7b',
  purple: '#C678DD',
  white: '#fffffb',
  blue: '#33a3dc',
  dark: '#1d1626',
  lightText: '#fffef9',
};

// Oh My Posh Markbull style segments
export const PromptContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  width: 100%;
`;

export const PromptLine = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.1rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const CornerBracket = styled.span`
  color: ${colors.yellow};
  font-size: 1rem;
  margin-right: 0.25rem;
  flex-shrink: 0;
`;

export const Segment = styled.span<{ $bg: string; $fg?: string; $isFirst?: boolean; $isLast?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.1rem 0.5rem;
  background: ${({ $bg }) => $bg};
  color: ${({ $fg }) => $fg || colors.dark};
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 1.4;
  white-space: nowrap;
  
  ${({ $isFirst }) => $isFirst && `
    padding-left: 0.6rem;
  `}
  
  ${({ $isLast }) => $isLast && `
    padding-right: 0.6rem;
  `}
  
  @media (max-width: 550px) {
    font-size: 0.7rem;
    padding: 0.05rem 0.35rem;
    gap: 0.2rem;
  }
`;

export const PowerlineArrow = styled.span<{ $color: string; $nextColor?: string }>`
  color: ${({ $color }) => $color};
  background: ${({ $nextColor }) => $nextColor || 'transparent'};
  font-size: 1.1rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  
  @media (max-width: 550px) {
    font-size: 0.9rem;
  }
`;

export const SecondLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  width: 100%;
`;

export const DollarSign = styled.span`
  color: #ffffff;
  font-weight: 500;
  flex-shrink: 0;
`;

export const CommandInput = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

// Legacy exports for compatibility
export const Span = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Wrapper = styled.span`
  color: ${({ theme }) => theme.colors.text[200]};
`;

import styled from "styled-components";

export const EduWrapper = styled.div`
  line-height: 1.6;
`;

export const EduItem = styled.div`
  margin-bottom: 0.75rem;
`;

export const EduTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const EduYear = styled.span`
  color: ${({ theme }) => theme.colors.text[300]};
  margin-left: 0.5rem;
`;

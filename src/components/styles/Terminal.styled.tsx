import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.75rem;
  padding-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.25rem;
`;

export const InputLine = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.text[100]};
  font-family: inherit;
  font-size: inherit;
  caret-color: ${({ theme }) => theme.colors.primary};
  min-width: 50px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text[300]};
  }
`;

export const Hints = styled.span`
  color: ${({ theme }) => theme.colors.text[300]};
  margin-right: 1rem;
`;

export const CmdNotFound = styled.div`
  color: ${({ theme }) => theme.colors.text[300]};
  margin-top: 0.25rem;
`;

export const Empty = styled.div`
  height: 0.5rem;
`;

export const CommandBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const MobileBr = styled.br`
  display: none;
  @media (max-width: 550px) {
    display: block;
  }
`;

export const MobileSpan = styled.span`
  display: none;
  color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 550px) {
    display: inline;
    margin-right: 0.25rem;
  }
`;

export const DesktopSpan = styled.span`
  @media (max-width: 550px) {
    display: none;
  }
`;

import styled from "styled-components";

export const HelpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const HelpRow = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Cmd = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  min-width: 120px;
  display: inline-block;
`;

export const CmdDesc = styled.span`
  color: ${({ theme }) => theme.colors.text[200]};
`;

export const Divider = styled.div`
  height: 1rem;
`;

export const ShortcutRow = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ShortcutKey = styled.span`
  color: ${({ theme }) => theme.colors.text[100]};
  min-width: 150px;
  display: inline-block;
`;

export const ShortcutDesc = styled.span`
  color: ${({ theme }) => theme.colors.text[300]};
`;

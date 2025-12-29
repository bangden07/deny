import styled from "styled-components";

// iMac Window Frame Components
export const WindowFrame = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 0;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.body};
`;

export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.body};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  user-select: none;
`;

export const TrafficLights = styled.div`
  display: flex;
  gap: 8px;
  z-index: 1;
`;

interface TrafficLightProps {
  $color: 'red' | 'yellow' | 'green';
}

export const TrafficLight = styled.button<TrafficLightProps>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;
  position: relative;
  
  ${({ $color }) => {
    switch ($color) {
      case 'red':
        return `
          background: linear-gradient(180deg, #ff6058 0%, #ed4c41 100%);
          box-shadow: 0 0 0 0.5px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3);
        `;
      case 'yellow':
        return `
          background: linear-gradient(180deg, #ffc130 0%, #f5b01e 100%);
          box-shadow: 0 0 0 0.5px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3);
        `;
      case 'green':
        return `
          background: linear-gradient(180deg, #2acb42 0%, #24b33a 100%);
          box-shadow: 0 0 0 0.5px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3);
        `;
    }
  }}
  
  &:hover {
    filter: brightness(1.1);
  }
  
  &:active {
    filter: brightness(0.9);
  }
`;

export const WindowTitle = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.text[300]};
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.3px;
`;

export const WindowContent = styled.div`
  flex: 1;
  padding: 1rem 1.25rem;
  padding-top: 60px; /* Space for fixed TitleBar */
  overflow-y: auto;
  height: 100vh;
  
  @media (max-width: 550px) {
    padding: 0.75rem 1rem;
    padding-top: 55px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.75rem;
  padding-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 0.25rem;
  gap: 0.5rem;
  
  @media (max-width: 550px) {
    flex-wrap: wrap;
  }
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

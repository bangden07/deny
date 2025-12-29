import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1e1e2e;
  color: #cdd6f4;
  font-family: 'IBM Plex Mono', monospace;
  padding: 1rem;
`;

export const LoadingContainer = styled.div`
  max-width: 500px;
  width: 100%;
`;

export const LoadingText = styled.div`
  color: #89b4fa;
  margin-bottom: 0.5rem;
`;

export const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const ProgressTrack = styled.div`
  flex: 1;
  height: 20px;
  border: 1px solid #45475a;
  background-color: #1e1e2e;
  position: relative;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background-color: #a6e3a1;
  transition: width 0.1s ease;
`;

export const ProgressPercent = styled.span`
  color: #a6e3a1;
  margin-left: 0.5rem;
  min-width: 45px;
`;

export const Cursor = styled.span`
  animation: ${blink} 1s infinite;
  color: #a6e3a1;
`;

export const LogLine = styled.div`
  color: #6c7086;
  font-size: 0.85rem;
  margin-top: 0.25rem;
`;

import { useState, useEffect } from "react";
import {
    LoadingWrapper,
    LoadingContainer,
    LoadingText,
    ProgressBar,
    ProgressTrack,
    ProgressFill,
    ProgressPercent,
    Cursor,
    LogLine,
} from "./styles/Loading.styled";

const loadingMessages = [
    "Initializing system...",
    "Loading modules...",
    "Connecting to server...",
    "Fetching portfolio data...",
    "Preparing terminal...",
    "Almost ready...",
];

type Props = {
    onComplete: () => void;
};

const Loading: React.FC<Props> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [currentMessage, setCurrentMessage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 300);
                    return 100;
                }
                return prev + Math.random() * 8 + 2;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    useEffect(() => {
        const messageIndex = Math.min(
            Math.floor((progress / 100) * loadingMessages.length),
            loadingMessages.length - 1
        );
        setCurrentMessage(messageIndex);
    }, [progress]);

    return (
        <LoadingWrapper>
            <LoadingContainer>
                <LoadingText>
                    $ loading deny.biz.id<Cursor>_</Cursor>
                </LoadingText>

                <ProgressBar>
                    <ProgressTrack>
                        <ProgressFill progress={Math.min(progress, 100)} />
                    </ProgressTrack>
                    <ProgressPercent>{Math.min(Math.floor(progress), 100)}%</ProgressPercent>
                </ProgressBar>

                <LogLine>[INFO] {loadingMessages[currentMessage]}</LogLine>
            </LoadingContainer>
        </LoadingWrapper>
    );
};

export default Loading;

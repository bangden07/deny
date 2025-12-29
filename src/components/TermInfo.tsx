import React from "react";
import {
    PromptContainer,
    PromptLine,
    CornerBracket,
    Segment,
    PowerlineArrow,
    SecondLine,
    DollarSign,
    CommandInput,
} from "./styles/TerminalInfo.styled";

// Markbull theme colors
const colors = {
    yellow: '#ffce7b',
    purple: '#C678DD',
    white: '#fffffb',
    blue: '#33a3dc',
    dark: '#1d1626',
    lightText: '#fffef9',
};

interface TermInfoProps {
    children?: React.ReactNode;
}

const TermInfo: React.FC<TermInfoProps> = ({ children }) => {
    return (
        <PromptContainer>
            {/* First line with segments */}
            <PromptLine>
                {/* Corner bracket */}
                <CornerBracket>┌</CornerBracket>

                {/* User@Host segment - Yellow */}
                <Segment $bg={colors.yellow} $fg={colors.dark} $isFirst>
                    <span>🖥</span>
                    <span>visitor@deny.biz.id</span>
                </Segment>
                <PowerlineArrow $color={colors.yellow} $nextColor={colors.purple}></PowerlineArrow>

                {/* OS + Path segment - Purple */}
                <Segment $bg={colors.purple} $fg={colors.lightText}>
                    <span></span>
                    <span>~/portfolio</span>
                </Segment>
                <PowerlineArrow $color={colors.purple} $nextColor={colors.white}></PowerlineArrow>

                {/* Git branch segment - White */}
                <Segment $bg={colors.white} $fg={colors.dark}>
                    <span></span>
                    <span>main</span>
                </Segment>
                <PowerlineArrow $color={colors.white} $nextColor={colors.blue}></PowerlineArrow>

                {/* Execution time segment - Blue */}
                <Segment $bg={colors.blue} $fg={colors.lightText} $isLast>
                    <span>↗</span>
                    <span>0ms</span>
                </Segment>
                <PowerlineArrow $color={colors.blue}></PowerlineArrow>
            </PromptLine>

            {/* Second line with $ and input/command */}
            <SecondLine>
                <CornerBracket>└</CornerBracket>
                <DollarSign>$</DollarSign>
                <CommandInput>{children}</CommandInput>
            </SecondLine>
        </PromptContainer>
    );
};

export default TermInfo;

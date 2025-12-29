import styled from "styled-components";

const UsageWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text[300]};
`;

type Props = {
    cmd: string;
    arg?: string[];
    options?: string[];
};

const Usage: React.FC<Props> = ({ cmd, arg, options }) => {
    return (
        <UsageWrapper>
            Usage: {cmd}
            {arg && arg.map((a, i) => <span key={i}> &lt;{a}&gt;</span>)}
            {options && (
                <>
                    {" "}
                    [
                    {options.map((o, i) => (
                        <span key={i}>
                            {i > 0 && " | "}
                            {o}
                        </span>
                    ))}
                    ]
                </>
            )}
        </UsageWrapper>
    );
};

export default Usage;

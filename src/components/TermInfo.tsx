import { Span, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
    return (
        <Wrapper>
            <Span>visitor</Span>@<Span>deny.biz.id</Span>:~$
        </Wrapper>
    );
};

export default TermInfo;

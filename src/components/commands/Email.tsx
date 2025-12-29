import { useContext, useEffect } from "react";
import styled from "styled-components";
import { termContext } from "../Terminal";

const EmailWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text[200]};
`;

const EmailLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
`;

const Email: React.FC = () => {
    const { rerender, index } = useContext(termContext);

    useEffect(() => {
        if (rerender && index === 0) {
            window.open("mailto:halo@deny.biz.id", "_blank");
        }
    }, [rerender, index]);

    return (
        <EmailWrapper data-testid="email">
            Membuka email client ke{" "}
            <EmailLink href="mailto:halo@deny.biz.id">halo@deny.biz.id</EmailLink>
            ...
        </EmailWrapper>
    );
};

export default Email;

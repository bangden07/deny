import { useContext, useEffect } from "react";
import styled from "styled-components";
import { termContext } from "../Terminal";

const GuiWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text[200]};
`;

const GuiLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
`;

const Gui: React.FC = () => {
    const { rerender, index } = useContext(termContext);

    useEffect(() => {
        if (rerender && index === 0) {
            window.open("https://ruang.tech", "_blank");
        }
    }, [rerender, index]);

    return (
        <GuiWrapper data-testid="gui">
            Membuka portfolio GUI di{" "}
            <GuiLink href="https://ruang.tech" target="_blank" rel="noopener noreferrer">
                ruang.tech
            </GuiLink>
            ...
        </GuiWrapper>
    );
};

export default Gui;

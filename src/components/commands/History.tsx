import { useContext } from "react";
import styled from "styled-components";
import { termContext } from "../Terminal";

const HistoryItem = styled.div`
  color: ${({ theme }) => theme.colors.text[200]};
`;

const History: React.FC = () => {
    const { history } = useContext(termContext);

    return (
        <div data-testid="history">
            {history
                .slice()
                .reverse()
                .map((cmd, index) => (
                    <HistoryItem key={index}>
                        {index + 1} {cmd}
                    </HistoryItem>
                ))}
        </div>
    );
};

export default History;

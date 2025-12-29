import { useContext, useEffect } from "react";
import { termContext } from "../Terminal";

const Clear: React.FC = () => {
    const { clearHistory, rerender, index } = useContext(termContext);

    useEffect(() => {
        if (rerender && index === 0 && clearHistory) {
            clearHistory();
        }
    }, [rerender, index, clearHistory]);

    return null;
};

export default Clear;

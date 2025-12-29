import { useContext } from "react";
import { termContext } from "../Terminal";

const Echo: React.FC = () => {
    const { arg } = useContext(termContext);

    return <div data-testid="echo">{arg.join(" ")}</div>;
};

export default Echo;

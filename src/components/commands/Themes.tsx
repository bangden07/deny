import { useContext, useEffect } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";
import themes from "../styles/themes";
import { ThemeItem } from "../styles/Themes.styled";
import { getCurrentCmdArry, isArgInvalid } from "../../utils/funcs";
import Usage from "../Usage";
import { ThemeSetContext } from "../../App";

const Themes: React.FC = () => {
    const { arg, history, rerender, index } = useContext(termContext);
    const { setTheme } = useContext(ThemeSetContext);

    const currentCommand = getCurrentCmdArry(history);
    const themeNames = _.keys(themes);

    // Check if this is a valid theme switch command
    const isValidSwitch = arg.length === 2 && arg[0] === "set" && _.includes(themeNames, arg[1]);

    // switch theme
    useEffect(() => {
        // Only switch theme when this is the latest command and is being rerendered
        if (rerender && index === 0 && isValidSwitch) {
            const themeName = arg[1];
            if (themes[themeName]) {
                setTheme(themes[themeName]);
            }
        }
    }, [rerender, index, isValidSwitch, arg, setTheme]);

    // If valid theme switch, show confirmation
    if (isValidSwitch) {
        return (
            <div data-testid="themes">
                Tema diubah ke <ThemeItem>{arg[1]}</ThemeItem>
            </div>
        );
    }

    // if arg is invalid (not empty and not valid format), show usage
    if (arg.length > 0 && isArgInvalid(arg, "set", themeNames)) {
        return (
            <Usage
                cmd="themes"
                arg={["set"]}
                options={themeNames}
            />
        );
    }

    // Default: show available themes
    return (
        <div data-testid="themes">
            <div>
                {themeNames.map(name => (
                    <ThemeItem key={name}>{name}</ThemeItem>
                ))}
            </div>
            <div style={{ marginTop: "0.5rem" }}>
                Penggunaan: themes set &lt;nama_tema&gt;
            </div>
        </div>
    );
};

export default Themes;

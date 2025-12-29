import React, {
    createContext,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import _ from "lodash";
import Output from "./Output";
import TermInfo from "./TermInfo";
import {
    CmdNotFound,
    Empty,
    Form,
    Hints,
    Input,
    InputLine,
    MobileBr,
    MobileSpan,
    DesktopSpan,
    Wrapper,
    WindowFrame,
    TitleBar,
    TrafficLights,
    TrafficLight,
    WindowTitle,
    WindowContent,
} from "./styles/Terminal.styled";
import { argTab } from "../utils/funcs";

type Command = {
    cmd: string;
    desc: string;
    tab: number;
}[];

export const commands: Command = [
    { cmd: "about", desc: "tentang Deny", tab: 8 },
    { cmd: "clear", desc: "bersihkan terminal", tab: 8 },
    { cmd: "echo", desc: "cetak teks apapun", tab: 9 },
    { cmd: "education", desc: "latar belakang pendidikan", tab: 4 },
    { cmd: "email", desc: "kirim email ke saya", tab: 8 },
    { cmd: "gui", desc: "buka portfolio versi GUI", tab: 10 },
    { cmd: "help", desc: "lihat daftar perintah", tab: 9 },
    { cmd: "history", desc: "lihat riwayat perintah", tab: 6 },
    { cmd: "projects", desc: "lihat proyek yang saya buat", tab: 5 },
    { cmd: "pwd", desc: "cetak direktori saat ini", tab: 10 },
    { cmd: "socials", desc: "lihat akun sosial media", tab: 6 },
    { cmd: "themes", desc: "lihat tema yang tersedia", tab: 7 },
    { cmd: "welcome", desc: "tampilkan halaman utama", tab: 6 },
    { cmd: "whoami", desc: "tentang pengguna saat ini", tab: 7 },
];

type Term = {
    arg: string[];
    history: string[];
    rerender: boolean;
    index: number;
    clearHistory?: () => void;
};

export const termContext = createContext<Term>({
    arg: [],
    history: [],
    rerender: false,
    index: 0,
});

const Terminal = () => {
    const containerRef = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const [inputVal, setInputVal] = useState("");
    const [cmdHistory, setCmdHistory] = useState<string[]>(["welcome"]);
    const [rerender, setRerender] = useState(false);
    const [hints, setHints] = useState<string[]>([]);
    const [pointer, setPointer] = useState(-1);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setRerender(false);
            setInputVal(e.target.value);
        },
        [inputVal]
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCmdHistory([inputVal, ...cmdHistory]);
        setInputVal("");
        setRerender(true);
        setHints([]);
        setPointer(-1);
    };

    const clearHistory = () => {
        setCmdHistory([]);
        setHints([]);
    };

    // focus on input when terminal is clicked
    const handleDivClick = () => {
        inputRef.current && inputRef.current.focus();
    };
    useEffect(() => {
        document.addEventListener("click", handleDivClick);
        return () => {
            document.removeEventListener("click", handleDivClick);
        };
    }, [containerRef]);

    // Keyboard Press
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setRerender(false);
        const ctrlI = e.ctrlKey && e.key.toLowerCase() === "i";
        const ctrlL = e.ctrlKey && e.key.toLowerCase() === "l";

        // if Tab or Ctrl + I
        if (e.key === "Tab" || ctrlI) {
            e.preventDefault();
            if (!inputVal) return;

            let hintsCmds: string[] = [];
            commands.forEach(({ cmd }) => {
                if (_.startsWith(cmd, inputVal)) {
                    hintsCmds = [...hintsCmds, cmd];
                }
            });

            const returnedHints = argTab(inputVal, setInputVal, setHints, hintsCmds);
            hintsCmds = returnedHints ? [...hintsCmds, ...returnedHints] : hintsCmds;

            // if there are many command to autocomplete
            if (hintsCmds.length > 1) {
                setHints(hintsCmds);
            }
            // if only one command to autocomplete
            else if (hintsCmds.length === 1) {
                const currentCmd = _.split(inputVal, " ");
                setInputVal(
                    currentCmd.length !== 1
                        ? `${currentCmd[0]} ${currentCmd[1]} ${hintsCmds[0]}`
                        : hintsCmds[0]
                );

                setHints([]);
            }
        }

        // if Ctrl + L
        if (ctrlL) {
            clearHistory();
        }

        // Go previous cmd
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (pointer >= cmdHistory.length) return;

            if (pointer + 1 === cmdHistory.length) return;

            setInputVal(cmdHistory[pointer + 1]);
            setPointer(prevState => prevState + 1);
            inputRef?.current?.blur();
        }

        // Go next cmd
        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (pointer < 0) return;

            if (pointer === 0) {
                setInputVal("");
                setPointer(-1);
                return;
            }

            setInputVal(cmdHistory[pointer - 1]);
            setPointer(prevState => prevState - 1);
            inputRef?.current?.blur();
        }
    };

    // For caret position at the end
    useEffect(() => {
        const timer = setTimeout(() => {
            inputRef?.current?.focus();
        }, 1);
        return () => clearTimeout(timer);
    }, [inputRef, inputVal, pointer]);

    return (
        <WindowFrame>
            <TitleBar>
                <TrafficLights>
                    <TrafficLight $color="red" title="Close" />
                    <TrafficLight $color="yellow" title="Minimize" />
                    <TrafficLight $color="green" title="Maximize" />
                </TrafficLights>
                <WindowTitle>deny@terminal: ~</WindowTitle>
            </TitleBar>
            <WindowContent ref={containerRef}>
                <Wrapper data-testid="terminal-wrapper">
                    {hints.length > 1 && (
                        <div>
                            {hints.map(hCmd => (
                                <Hints key={hCmd}>{hCmd}</Hints>
                            ))}
                        </div>
                    )}
                    <Form onSubmit={handleSubmit}>
                        <TermInfo>
                            <Input
                                title="terminal-input"
                                type="text"
                                id="terminal-input"
                                autoComplete="off"
                                spellCheck="false"
                                autoFocus
                                autoCapitalize="off"
                                ref={inputRef}
                                value={inputVal}
                                onKeyDown={handleKeyDown}
                                onChange={handleChange}
                            />
                        </TermInfo>
                    </Form>

                    {cmdHistory.map((cmdH, index) => {
                        const commandArray = _.split(_.trim(cmdH), " ");
                        const validCommand = _.find(commands, { cmd: commandArray[0] });
                        const contextValue = {
                            arg: _.drop(commandArray),
                            history: cmdHistory,
                            rerender,
                            index,
                            clearHistory,
                        };
                        return (
                            <div key={_.uniqueId(`${cmdH}_`)}>
                                <div>
                                    <TermInfo>
                                        <span data-testid="input-command">{cmdH}</span>
                                    </TermInfo>
                                </div>
                                {validCommand ? (
                                    <termContext.Provider value={contextValue}>
                                        <Output index={index} cmd={commandArray[0]} />
                                    </termContext.Provider>
                                ) : cmdH === "" ? (
                                    <Empty />
                                ) : (
                                    <CmdNotFound data-testid={`not-found-${index}`}>
                                        perintah tidak ditemukan: {cmdH}
                                    </CmdNotFound>
                                )}
                            </div>
                        );
                    })}
                </Wrapper>
            </WindowContent>
        </WindowFrame>
    );
};

export default Terminal;

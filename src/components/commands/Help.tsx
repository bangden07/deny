import { commands } from "../Terminal";
import {
    HelpContainer,
    HelpRow,
    Cmd,
    CmdDesc,
    Divider,
    ShortcutRow,
    ShortcutKey,
    ShortcutDesc,
} from "../styles/Help.styled";

const Help: React.FC = () => {
    return (
        <HelpContainer data-testid="help">
            {commands.map(({ cmd, desc }) => (
                <HelpRow key={cmd}>
                    <Cmd>{cmd}</Cmd>
                    <CmdDesc>- {desc}</CmdDesc>
                </HelpRow>
            ))}

            <Divider />

            <ShortcutRow>
                <ShortcutKey>Tab atau Ctrl + i</ShortcutKey>
                <ShortcutDesc>=&gt; melengkapi perintah otomatis</ShortcutDesc>
            </ShortcutRow>
            <ShortcutRow>
                <ShortcutKey>Panah Atas</ShortcutKey>
                <ShortcutDesc>=&gt; kembali ke perintah sebelumnya</ShortcutDesc>
            </ShortcutRow>
            <ShortcutRow>
                <ShortcutKey>Ctrl + l</ShortcutKey>
                <ShortcutDesc>=&gt; bersihkan terminal</ShortcutDesc>
            </ShortcutRow>
        </HelpContainer>
    );
};

export default Help;

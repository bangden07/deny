import { useContext, useEffect } from "react";
import _ from "lodash";
import styled from "styled-components";
import { termContext } from "../Terminal";
import { checkRedirect, getCurrentCmdArry, isArgInvalid } from "../../utils/funcs";
import Usage from "../Usage";

type Social = {
    id: number;
    title: string;
    url: string;
    icon: string;
};

const socials: Social[] = [
    {
        id: 1,
        title: "GitHub",
        url: "https://github.com/bangden07",
        icon: "🐙",
    },
    {
        id: 2,
        title: "Codepen",
        url: "https://codepen.io/b",
        icon: "🧑‍💻",
    },
    {
        id: 3,
        title: "X",
        url: "https://x.com/bangden",
        icon: "🐦",
    },
    {
        id: 4,
        title: "Instagram",
        url: "https://instagram.com/bangden.07/#",
        icon: "📷",
    },
];

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const SocialItem = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SocialId = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
`;

const Socials: React.FC = () => {
    const { arg, history, rerender } = useContext(termContext);

    const currentCommand = getCurrentCmdArry(history);

    // redirect to social url
    useEffect(() => {
        if (checkRedirect(rerender, currentCommand, "socials")) {
            const id = parseInt(currentCommand[2]);
            const social = _.find(socials, { id });
            if (social) {
                window.open(social.url, "_blank");
            }
        }
    }, [rerender, currentCommand]);

    // if arg is invalid, show usage
    if (arg.length > 0 && isArgInvalid(arg, "go", ["1", "2", "3", "4"])) {
        return (
            <Usage
                cmd="socials"
                arg={["go"]}
                options={["1", "2", "3", "4"]}
            />
        );
    }

    return (
        <SocialsContainer data-testid="socials">
            {socials.map(({ id, title, url, icon }) => (
                <SocialItem key={id}>
                    <SocialId>{id}.</SocialId>
                    <span>{icon}</span>
                    <SocialLink href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </SocialLink>
                </SocialItem>
            ))}
            <div style={{ marginTop: "0.5rem" }}>
                Penggunaan: socials go &lt;id_sosial&gt;
            </div>
        </SocialsContainer>
    );
};

export default Socials;

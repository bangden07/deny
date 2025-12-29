import { useContext, useEffect } from "react";
import _ from "lodash";
import {
    ProjectsContainer,
    IntroText,
    ProjectItem,
    ProjectTitle,
    ProjectId,
    ProjectName,
    ProjectDesc,
    UsageText,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import { checkRedirect, getCurrentCmdArry, isArgInvalid } from "../../utils/funcs";
import Usage from "../Usage";

type Project = {
    id: number;
    title: string;
    desc: string;
    url: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "Resi Track Pro",
        desc: "Aplikasi PWA untuk monitoring paket dengan barcode scanning, offline-first storage, dan multi-export format",
        url: "https://cekresi.ruang.tech",
    },
    {
        id: 2,
        title: "Si Wargaku - Sistem Monitoring Penduduk RT/RW",
        desc: "Aplikasi monitoring penduduk untuk RT dan RW. Kelola data warga, laporan kas, permohonan, dan pengumuman dengan mudah.",
        url: "https://siwargaku.ruang.tech",
    },
    {
        id: 3,
        title: "Terminal Porto Site",
        desc: "Terminal-style portfolio website. Interactive command-line interface to explore my projects, skills, and experience.",
        url: "https://deny.biz.id",
    },
];

const Projects: React.FC = () => {
    const { arg, history, rerender } = useContext(termContext);

    const currentCommand = getCurrentCmdArry(history);

    // redirect to project url
    useEffect(() => {
        if (checkRedirect(rerender, currentCommand, "projects")) {
            const id = parseInt(currentCommand[2]);
            const project = _.find(projects, { id });
            if (project) {
                window.open(project.url, "_blank");
            }
        }
    }, [rerender, currentCommand]);

    // if arg is invalid, show usage
    if (arg.length > 0 && isArgInvalid(arg, "go", ["1", "2", "3"])) {
        return (
            <Usage
                cmd="projects"
                arg={["go"]}
                options={["1", "2", "3"]}
            />
        );
    }

    return (
        <ProjectsContainer data-testid="projects">
            <IntroText>
                Ini merupakan beberapa proyek yang sudah saya buat:
            </IntroText>

            {projects.map(({ id, title, desc, url }) => (
                <ProjectItem key={id}>
                    <ProjectTitle>
                        <ProjectId>{id}.</ProjectId>
                        <ProjectName href={url} target="_blank" rel="noopener noreferrer">
                            {title}
                        </ProjectName>
                    </ProjectTitle>
                    <ProjectDesc>{desc}</ProjectDesc>
                </ProjectItem>
            ))}

            <UsageText>
                Penggunaan: projects go &lt;nomor_proyek&gt;
                <br />
                Contoh: projects go 1
            </UsageText>
        </ProjectsContainer>
    );
};

export default Projects;

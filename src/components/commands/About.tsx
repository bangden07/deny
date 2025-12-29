import { AboutWrapper } from "../styles/About.styled";

const About: React.FC = () => {
    return (
        <AboutWrapper data-testid="about">
            <p>
                Halo, nama saya <strong>Deny</strong>!
            </p>
            <p>
                Saya adalah developer yang passionate dalam membangun aplikasi web dan menyelesaikan masalah dengan kode.
            </p>
            <p>
                Selamat datang di portfolio terminal saya. Silakan jelajahi menggunakan perintah!
            </p>
        </AboutWrapper>
    );
};

export default About;

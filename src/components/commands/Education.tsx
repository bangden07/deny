import {
    EduWrapper,
    EduItem,
    EduTitle,
    EduYear,
} from "../styles/Education.styled";

const Education: React.FC = () => {
    return (
        <EduWrapper data-testid="education">
            <EduItem>
                <EduTitle>Sekolah Menengah Atas</EduTitle>
                <EduYear>(2008 - 2011)</EduYear>
                <div>Khadijah, Surabaya</div>
            </EduItem>
        </EduWrapper>
    );
};

export default Education;

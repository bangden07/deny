type Props = {
    children: React.ReactNode;
};

const GeneralOutput: React.FC<Props> = ({ children }) => {
    return <div data-testid="general-output">{children}</div>;
};

export default GeneralOutput;

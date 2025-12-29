import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import themes from "../components/styles/themes";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider theme={themes.dark}>{children}</ThemeProvider>;
};

const customRender = (
    ui: React.ReactElement,
    options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };

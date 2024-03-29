import * as React from "react";
import { deepmerge } from "@mui/utils";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getDesignTokens, getThemedComponents } from "./lib/theme";
import { GlobalStyles } from "@mui/styled-engine";

export default function BrandingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const upperTheme = useTheme();
  const mode = upperTheme.palette.mode;
  const theme = React.useMemo(() => {
    const designTokens = getDesignTokens(mode);
    let newTheme = createTheme({ ...designTokens });
    newTheme = deepmerge(newTheme, getThemedComponents(newTheme));
    return newTheme;
  }, [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "html, body, #root": { height: "100%" },
          "#root": { display: "flex", flexDirection: "column" },
        }}
      />
      {children}
    </ThemeProvider>
  );
}

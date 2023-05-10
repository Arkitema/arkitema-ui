import { Container, Stack } from "@mui/material";
import React, { ReactNode } from "react";

interface PaperPageStackProps {
  children: ReactNode;
  "data-testid"?: string;
}

export const PaperPageStack: React.FC<PaperPageStackProps> = (props) => (
  <Container
    maxWidth={false}
    data-testid={props["data-testid"]}
    sx={{ paddingBottom: 5 }}
  >
    <Stack spacing={5}>{props.children}</Stack>
  </Container>
);

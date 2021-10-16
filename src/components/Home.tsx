import { Card, Stack, Typography } from "@mui/material";
import React from "react";

export function Home() {
  return (
    <Card>
      <Stack alignItems="center" justifyContent="center" spacing={1} p={1}>
        <Typography variant="h5" color="InfoText">
          So you want to get stronger?
        </Typography>
        <Typography variant="h3" color="InfoText" component="div">
          💪
        </Typography>
        <Typography>
          Follow the daily excercise routine and ONLY do what is asked that day.
        </Typography>
        <Typography variant="caption">
          Your settings are currently saved in a temporary session, so no
          account is necessary.
        </Typography>
        <Typography component="div">
          <ol>
            <li>Start with the easiest progression (default)</li>
            <li>
              Only move to the next progression when you can master the
              recommended sets with perfect form on the current progression.
            </li>
            <li>
              Do every excercise with intention. (Imagine mastering each move)
            </li>
            <li>Allow small break between exercises</li>
            <li>Each daily routine can be complete in 30-45 minutes.</li>
          </ol>
        </Typography>
      </Stack>
    </Card>
  );
}

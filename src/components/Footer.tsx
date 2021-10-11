import { Link, Stack, Typography } from "@mui/material";
import React from "react";

export function Footer() {
  return (
    <Stack alignItems="center" spacing={1}>
      <Typography variant="body1" fontSize={14}>
        <span>Source:</span>{" "}
        <Link href="https://www.hybridcalisthenics.com/routine">
          Hybrid Calisthenics
        </Link>
        {" / "}
        <Link href="https://www.youtube.com/watch?v=qw3YMCg4d0Y">
          Javier Rivero
        </Link>
        {/* https://www.reddit.com/r/bodyweightfitness/comments/lm1nan/bodyweight_finishers/ */}
      </Typography>
    </Stack>
  );
}

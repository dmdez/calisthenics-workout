import { Link, Stack, Typography } from "@mui/material";
import React from "react";

export function Footer() {
  return (
    <Stack alignItems="center" spacing={1}>
      <Typography>
        <Stack direction="row" spacing={1}>
          <span>Source:</span>
          <Link href="https://www.hybridcalisthenics.com/routine">
            Hybrid Calisthenics
          </Link>
          <span>and</span>
          <Link href="https://www.youtube.com/watch?v=qw3YMCg4d0Y">
            Javier Rivero
          </Link>
        </Stack>
        {/* https://www.reddit.com/r/bodyweightfitness/comments/lm1nan/bodyweight_finishers/ */}
      </Typography>
    </Stack>
  );
}

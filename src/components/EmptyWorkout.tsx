import { Box, Card, Stack, Typography } from "@mui/material";

export function EmptyWorkout() {
  return (
    <Box p={1}>
      <Card>
        <Stack alignItems="center" justifyContent="center" spacing={1} p={1}>
          <Typography variant="h5" color="InfoText">
            No workouts.
          </Typography>
          <Typography color="GrayText">
            Enjoy the day and do something active!
            <ul>
              <li>Stretch</li>
              <li>Walk/Run</li>
              <li>Hike</li>
              <li>Play a game</li>
              <li>...</li>
            </ul>
          </Typography>
        </Stack>
      </Card>
    </Box>
  );
}

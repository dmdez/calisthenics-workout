import { Tab, Tabs, AppBar, SvgIcon, Container } from "@mui/material";
import React from "react";
import { DAYS } from "../lib/excercises";

type Props = {
  dow: string;
  onTabChange: (label: string) => void;
};

export function Header({ dow, onTabChange }: Props) {
  return (
    <AppBar position="static">
      <Container fixed maxWidth="sm">
        <Tabs
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="inherit"
          centered
          value={dow}
          onChange={(_e, value) => onTabChange(value)}
        >
          <Tab
            value="home"
            icon={
              <SvgIcon viewBox="0 0 48 48">
                <path d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.072266 4.3222656 L 8.859375 15.519531 C 7.0554772 16.941163 6 19.113506 6 21.410156 L 6 37.5 C 6 40.519774 8.4802259 43 11.5 43 L 36.5 43 C 39.519774 43 42 40.519774 42 37.5 L 42 21.410156 C 42 19.113506 40.944523 16.941163 39.140625 15.519531 L 24.927734 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.285156 17.876953 C 38.369258 18.731322 39 20.030807 39 21.410156 L 39 37.5 C 39 38.898226 37.898226 40 36.5 40 L 11.5 40 C 10.101774 40 9 38.898226 9 37.5 L 9 21.410156 C 9 20.030807 9.6307412 18.731322 10.714844 17.876953 L 24 7.4101562 z M 17.476562 19.978516 A 1.50015 1.50015 0 0 0 16 21.5 L 16 23.5 A 1.50015 1.50015 0 1 0 13 23.5 L 13 31.5 A 1.50015 1.50015 0 1 0 16 31.5 L 16 33.5 A 1.50015 1.50015 0 1 0 19 33.5 L 19 29 L 29 29 L 29 33.5 A 1.50015 1.50015 0 1 0 32 33.5 L 32 31.5 A 1.50015 1.50015 0 1 0 35 31.5 L 35 23.5 A 1.50015 1.50015 0 1 0 32 23.5 L 32 21.5 A 1.50015 1.50015 0 1 0 29 21.5 L 29 26 L 19 26 L 19 21.5 A 1.50015 1.50015 0 0 0 17.476562 19.978516 z"></path>
              </SvgIcon>
            }
          />
          {DAYS.map(({ name }) => (
            <Tab key={name} value={name} icon={name} />
          ))}
        </Tabs>
      </Container>
    </AppBar>
  );
}

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

type HeaderTabsProps = {
  tabType: "about" | "education" | "experiences" | "skills" | "projects";
  onTabChange: (
    tabType: "about" | "education" | "experiences" | "skills" | "projects"
  ) => void;
};
export default function HeaderTabs({ tabType, onTabChange }: HeaderTabsProps) {
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    onTabChange(
      newValue as "about" | "education" | "experiences" | "skills" | "projects"
    );
  };
  const theme = useTheme();

  const tabs = ["about", "education", "experiences", "skills", "projects"];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        justifyItems: "center",
        justifySelf: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Tabs
        value={tabType}
        onChange={handleChange}
        aria-label="icon label tabs example"
      >
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab}
              sx={{
                marginRight: 2,
                "&.Mui-selected": {
                  color: theme.palette.action.hover,
                },
              }}
              value={tab}
              label={tab}
              icon={
                tab === "about" ? (
                  <InfoIcon fontSize="medium" />
                ) : tab === "education" ? (
                  <SchoolIcon fontSize="medium" />
                ) : tab === "experiences" ? (
                  <WorkIcon fontSize="medium" />
                ) : tab === "skills" ? (
                  <SquareFootIcon fontSize="medium" />
                ) : (
                  <AccountTreeIcon fontSize="medium" />
                )
              }
            />
          );
        })}
      </Tabs>
    </Box>
  );
}

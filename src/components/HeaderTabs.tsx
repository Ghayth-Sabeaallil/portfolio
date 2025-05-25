import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { useTheme } from "@mui/material/styles";

type HeaderTabsProps = {
  tabType: "about" | "education" | "experiences";
  onTabChange: (tabType: "about" | "education" | "experiences") => void;
};
export default function HeaderTabs({ tabType, onTabChange }: HeaderTabsProps) {
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    onTabChange(newValue as "about" | "education" | "experiences");
  };
  const theme = useTheme();

  const tabs = ["about", "education", "experiences"];

  return (
    <Tabs
      value={
        tabType === "about"
          ? "about"
          : tabType === "education"
          ? "education"
          : "experiences"
      }
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
              ) : (
                <WorkIcon fontSize="medium" />
              )
            }
          />
        );
      })}
    </Tabs>
  );
}

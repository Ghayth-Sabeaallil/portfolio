import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { tabs } from "../lib/data";
import type { TabType } from "../lib/types";

type HeaderTabsProps = {
  tabType: TabType;
  onTabChange: (tabType: TabType) => void;
};

export default function HeaderTabs({ tabType, onTabChange }: HeaderTabsProps) {
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    onTabChange(newValue as TabType);
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Tabs
        value={tabType}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="icon label tabs example"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            sx={{
              marginRight: 2,
              "&.Mui-selected": {
                color: theme.palette.action.hover,
              },
            }}
            value={tab.label}
            label={tab.label}
            icon={<tab.icon color="secondary" />}
          />
        ))}
      </Tabs>
    </Box>
  );
}

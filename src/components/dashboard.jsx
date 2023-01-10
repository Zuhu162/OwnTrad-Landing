import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import palette from "./pallete";
import RoleButton from "./roleButtons";

const Dashboard = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: palette.background,
          height: "85vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            height: "50vh",
            display: "flex",
            width: "80%",
            alignItems: "center",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <RoleButton bgColor="#522e92" title="Manufacturer"></RoleButton>
            </Grid>
            <Grid item xs={4}>
              <RoleButton bgColor="#1a78c2" title="Retailer"></RoleButton>
            </Grid>
            <Grid item xs={4}>
              <RoleButton bgColor="#00b85d" title="Buyer"></RoleButton>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;

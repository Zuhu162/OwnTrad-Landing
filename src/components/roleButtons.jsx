import { Box, Grid, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";

const RoleButton = (props) => {
  let bgColor = props.bgColor;

  return (
    <div>
      <Box
        sx={{
          backgroundColor: bgColor,
          height: "150px",
          width: "100%",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          justifyContent: "flex-start",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={8}>
            <Typography sx={{ color: "white" }} variant="h6">
              {props.title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <AddCircleIcon sx={{ color: "white" }}></AddCircleIcon>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default RoleButton;

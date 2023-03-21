import { Grid, Typography, Icon } from "@mui/material";
import { TableChart } from "@mui/icons-material";
import Header from "../../global/components/Header/Header";

const User = () => {
  return (
    <>
    <Header />
      <Grid
        container
        spacing={4}
        sx={{ paddingTop: "64px", height: "100vh", overflow: "auto" }}
      >
        
        <Grid item xs={12} sm={3} bgcolor="#FFFFFF">
          <Typography variant="h5">Tables</Typography>
          <Typography style={{ cursor: "pointer" }}>
            <Icon color="primary" fontSize="large">
              <TableChart fontSize="small" sx={{ color: "black" }} />
            </Icon>
            Employee
          </Typography>
          <Typography style={{ cursor: "pointer" }}>
            <Icon color="primary" fontSize="large">
              <TableChart fontSize="small" sx={{ color: "black" }} />
            </Icon>
            Address
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            bgcolor: "#f4f4f4",
          }}
        >
          <Icon color="primary" fontSize="large" sx={{ mb: 2 }}>
            <TableChart fontSize="large" />
          </Icon>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Please select table
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Please select a table to start exploring
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default User;
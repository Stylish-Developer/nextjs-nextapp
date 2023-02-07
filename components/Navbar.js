import Link from "next/link";
import {
  Menu,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  styled,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#000000",
});

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1,marginBottom: '100px' }} position="static">
      <AppBar >
        <StyledToolbar>
          <Link href="/">
            <Button color="inherit">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Next App
              </Typography>
            </Button>
          </Link>
          <div>
            <Link href="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link href="/about">
              {" "}
              <Button color="inherit">About</Button>
            </Link>
          </div>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

import {
  Box,
    Typography,
    styled,

  } from "@mui/material";
  
  const StyledBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    height: "200px",
    width: "100%",
    color:'#ccc'
  });
  
  const Navbar = () => {

    return (
      <StyledBox>
        <Typography variant="body2" >
          gautham@next-js
        </Typography>
      </StyledBox>
    );
  };
  
  export default Navbar;
  
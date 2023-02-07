import React,{ useEffect } from 'react';
import { Box, Divider, Typography, styled,Button, Link } from "@mui/material";
import { useRouter } from 'next/router';
const StyledBox = styled(Box)({
  height: "500px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const _404 = () => {

// Auto re-direct
const router = useRouter();

    useEffect( () => {
        const timeId = setTimeout( () => {
            router.push('/');
        },3000 )

        return () => {
            clearTimeout(timeId);
        }
    },[] );

    
  return (
    <>
      <StyledBox>
        <Typography variant="h3">Whoops! 😕</Typography>

        <Typography variant="h6">Page not found</Typography>
     <Link href="/">
     <Button variant="contained" color="primary">
            Go to home
        </Button>
     </Link>
      </StyledBox>
    </>
  );
};

export default _404;

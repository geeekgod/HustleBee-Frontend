import { Button } from "@mui/material";
import React from "react";

const CustomBtn = (props) => {
  return (
    <>
      <Button variant="contained" disableElevation {...props}>
        {props.children ? props.children : ""}
      </Button>
    </>
  );
};

export default CustomBtn;
// for all the react scroll buttons 

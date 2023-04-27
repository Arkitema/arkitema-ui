import { Stack, Typography, Button, Container, Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../components";

import { styled } from "@mui/material/styles";

export interface ArkitemaButtonProps {
  text: string;
  onclick: any;
  disabled?: boolean;
  width?: string;
}

export const ArkitemaButton: React.FC<ArkitemaButtonProps> = (props) => {
  const { text, onclick, disabled, width = "150px" } = props;

  const CustomButton = styled(Button)({
    paddingLeft: "20px",
    marginLeft: "10px",
    marginRight: "10px",
    paddingRight: "20px",
    borderRadius: "50px",
    width: width,
    backgroundColor: theme.palette.common.white,
    color: "#333",
    border: disabled ? "1px solid #dbdbdb" : "1px solid #333",
    "&:hover": {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
  });

  return (
    <CustomButton onClick={onclick} disabled={disabled}>
      {text}
    </CustomButton>
  );
};

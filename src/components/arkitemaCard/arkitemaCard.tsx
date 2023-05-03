import { Paper, Grid, Typography, Link } from "@mui/material";
import { theme } from "..";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";

export interface CardInfo {
  id: string;
  title: string;
  subtitle: string;
  unit: string;
  imageUrl: string;
}

export interface CardProps {
  key: number;
  cardInfo: CardInfo;
  size?: "small" | "large";
}

export const ArkitemaCard: React.FC<CardProps> = (props) => {
  const { key, cardInfo, size = "large" } = props;
  const { pathname } = useLocation();

  const [height, setHeight] = useState("350px");
  const [width, setWidth] = useState("350px");
  const [md, setMd] = useState(3);

  useEffect(() => {
    if (size === "small") {
      setHeight("200px");
      setWidth("200px");
      setMd(2);
    }
  }, [size]);

  const StyledLinearGradient = styled("div")({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0) 90%)",
    zIndex: 1,
  });

  return (
    <Grid item xs={2} sm={5} md={md} key={key} data-testid="carbon-card">
      <Link href={`${pathname}/${cardInfo.id}`}>
        <Paper
          sx={{
            height: height,
            width: width,
            margin: 0,
            overflow: "hidden",
            position: "relative",
            borderRadius: 0,
          }}
          elevation={0}
        >
          <StyledLinearGradient />
          <Typography
            variant={size === "large" ? "h3" : "h4"}
            component="div"
            sx={
              size === "large"
                ? {
                    position: "absolute",
                    left: "calc(50% - 7vw)",
                    top: "12%",
                    color: theme.palette.common.white,
                    zIndex: 2,
                  }
                : {
                    position: "absolute",
                    left: "calc(50% - 4vw)",
                    top: "12%",
                    color: theme.palette.common.white,
                    zIndex: 2,
                  }
            }
          >
            {cardInfo.title}
          </Typography>
          <Typography
            variant={size === "large" ? "h2" : "h3"}
            component="div"
            sx={{
              position: "absolute",
              top: "74%",
              right: "calc(50% - 5vw)",
              color: theme.palette.common.white,
              zIndex: 2,
            }}
          >
            {cardInfo.subtitle}
            {size === "small" && " co2"}
          </Typography>
          {size === "large" && (
            <Typography
              component="div"
              sx={{
                position: "absolute",
                top: "85%",
                left: "73%",
                transform: "translateX(-50%)",
                fontSize: theme.typography.h5,
                color: theme.palette.common.white,
                zIndex: 2,
              }}
            >
              {cardInfo.subtitle && cardInfo.unit}
            </Typography>
          )}
          <img
            src={cardInfo.imageUrl}
            height={height}
            style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
          />
        </Paper>
      </Link>
    </Grid>
  );
};

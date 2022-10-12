import React from "react";
import { Typography, AppBar, Toolbar } from "@mui/material";
import { appbar } from "./styles";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const appBar = () => {
  return (
    <>
      <AppBar sx={appbar.two} position="relative">
        <Toolbar variant="outlined" sx={appbar.one}>
          <WatchLaterIcon sx={{ fontSize: 12 }} />
          <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
            mon 10:00pm - tue 10:00pm
          </Typography>
          <PhoneInTalkIcon sx={{ marginLeft: 3, fontSize: 12 }} />
          <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
            +12345678910
          </Typography>
          <LocationOnIcon sx={{ marginLeft: 3, fontSize: 12 }} />
          <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
            Lorem Ipsum is simply dummy text of the printing
          </Typography>
          <FacebookIcon sx={{ marginLeft: 23 }} />
          <WhatsAppIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default appBar;

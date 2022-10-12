import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { footer } from "./styles";
import ContactsIcon from "@mui/icons-material/Contacts";
import DialpadIcon from "@mui/icons-material/Dialpad";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <>
      <Container maxWidth="100%" sx={footer.one}>
        <Container sx={footer.two}>
          <Typography variant="h3" sx={footer.three}>
            LOGO
          </Typography>
          <Container sx={{ height: "70%" }}></Container>
          <Typography sx={{ fontSize: 13 }}>
            Logo@2022 ,All Rights Reserved
          </Typography>
        </Container>
        <Container sx={footer.two}>
          <Typography variant="h6" sx={footer.four}>
            Main Office
          </Typography>
          <Typography variant="h6" sx={footer.five}>
            <ContactsIcon sx={{ fontSize: 14 }} />
            <Typography sx={{ ml: 1, fontSize: 12 }}>ADDRESS 1</Typography>
          </Typography>
          <Typography variant="h6" sx={footer.five}>
            <DialpadIcon sx={{ fontSize: 14 }} />
            <Typography sx={{ ml: 1, fontSize: 12 }}>012345678</Typography>
          </Typography>
        </Container>
        <Container sx={footer.two}>
          <Typography href="#" variant="h6" sx={footer.four}>
            Usefull Links
          </Typography>
          <Button href="#" sx={footer.six}>
            Our Services
          </Button>
          <Button href="#" sx={footer.six}>
            Our Team
          </Button>
          <Button href="#" sx={footer.six}>
            Portfolio
          </Button>
          <Button href="#" sx={footer.six}>
            Shortcodes
          </Button>
          <Button href="#" sx={footer.six}>
            Typography
          </Button>
          <Button href="#" sx={footer.six}>
            Privacy Policy
          </Button>
        </Container>
        <Container sx={footer.two}>
          <Typography variant="h6" sx={footer.four}>
            Socials
          </Typography>
          <Container sx={footer.seven}>
            <FacebookIcon />
            <WhatsAppIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Footer;

import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import React from "react";
import { footer } from "./styles";
import ContactsIcon from "@mui/icons-material/Contacts";
import DialpadIcon from "@mui/icons-material/Dialpad";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <>
      <Box sx={footer.one}>
        <Box display={{ xs: "none", sm: "flex", md: "flex" }}>
          <Container sx={footer.two}>
            <Typography variant="h3" sx={footer.three}>
              LOGO
            </Typography>

            <Container sx={{ height: "70%" }}></Container>

            <Typography sx={{ fontSize: 13 }}>
              Logo@2022 ,All Rights Reserved
            </Typography>
          </Container>
        </Box>

        <Container sx={footer.two}>
          <Typography variant="h6" sx={footer.four}>
            Main Office
          </Typography>
          <Typography variant="h6" sx={footer.five}>
            <ContactsIcon sx={{ fontSize: 14 }} />
            <Typography sx={{ ml: 1, fontSize: 12 }}>ADDRESS </Typography>
          </Typography>
          <Typography variant="h6" sx={footer.five}>
            <DialpadIcon sx={{ fontSize: 14 }} />
            <Typography sx={{ ml: 1, fontSize: 12 }}>012345678</Typography>
          </Typography>
        </Container>
        <Container sx={footer.two}>
          <Typography href="#" variant="h6" sx={footer.four}>
            Links
          </Typography>
          <Button sx={footer.about}>
            <Link to="/About" p={0}>
              About
            </Link>
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
        <Box display={{ xs: "none", sm: "flex", md: "flex" }}>
          <Box sx={footer.two}>
            <Typography variant="h6" sx={footer.four}>
              Socials
            </Typography>
            <Box sx={footer.seven}>
              <FacebookIcon />
              <WhatsAppIcon />
              <InstagramIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;

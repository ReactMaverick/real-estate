import {
  Avatar,
  Box,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../Theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";
import { GET_CONTACTUS_DETAILS } from "../common/urls";
import axios from "axios";
import { useState, useEffect } from "react";

const Footer = () => {
  const [contactUsDetails, setContactUsDetails] = useState([]);

  const _getContactUsDetails = async () => {
    await axios
      .get(GET_CONTACTUS_DETAILS)
      .then((response) => {
        // console.log("response_contact", response);
        if (response.data.status) {
          setContactUsDetails(response.data.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    _getContactUsDetails()
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.dark,
        padding: { xs: "30px 0px", md: "30px 0px", lg:"50px 0px"},
        marginTop:"0px"
      }}
    >
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:{ xs: "1fr", md: "repeat(2, 1fr)", lg:"repeat(3, 1fr)"},
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Box
            sx={{
              width:  { xs: "100%", md: "100%", lg:"70%"},
             
            }}
          >
            <Box
              sx={{
                width: { xs: "80px", sm: "100px", lg: "200px" },
                minWidth: { xs: "80px", sm: "100px", lg: "220px" },
              }}
            >
              <img className="logo" src={process.env.PUBLIC_URL+"/assets/images/logo.gif"} />
            </Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight:"20px",
                color:theme.palette.primary.lightGrey,
                marginTop:"20px",
              }}
              variant="p"
              component={"p"}
            >
              {contactUsDetails && contactUsDetails.description}
            </Typography>
            <List
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginTop:"20px"
              }}
            >
              <ListItem
                sx={{
                  display: "block",
                  padding: "0px",
                  width: "auto",
                  cursor: "pointer",
                }}
              >
                <ListItemAvatar
                  sx={{
                    minWidth: "auto",
                  }}
                >
                  <Avatar sx={{
                    backgroundColor:theme.palette.primary.main,
                  }}>
                    <FacebookIcon />
                  </Avatar>
                </ListItemAvatar>
              </ListItem>

              <ListItem
                sx={{
                  display: "block",
                  padding: "0px",
                  width: "auto",
                  cursor: "pointer",
                }}
              >
                <ListItemAvatar
                  sx={{
                    minWidth: "auto",
                  }}
                >
                  <Avatar sx={{
                    backgroundColor:theme.palette.primary.main,
                  }}>
                    <InstagramIcon />
                  </Avatar>
                </ListItemAvatar>
              </ListItem>

              <ListItem
                sx={{
                  display: "block",
                  padding: "0px",
                  width: "auto",
                  cursor: "pointer",
                }}
              >
                <ListItemAvatar
                  sx={{
                    minWidth: "auto",
                  }}
                >
                  <Avatar sx={{
                    backgroundColor:theme.palette.primary.main,
                  }}>
                    <WhatsAppIcon />
                  </Avatar>
                </ListItemAvatar>
              </ListItem>
            </List>
          </Box>
          <Box 
           sx={{
            width:  { xs: "100%", md: "100%", lg:"70%"},
            margin:"auto"
          }}>
                  <Typography variant="h6" sx={{ color: theme.palette.primary.logoColor, fontSize: "22px", fontWeight: "500", lineHeight: "42px", textTransform: "capitalize" }}>Quick Links</Typography>
            <List>
              <ListItem sx={{
                  display: "block",
                  padding: "5px 0px",
                  width: "auto",                  
                }}>
              <Link to="/aboutus">  <Typography variant="p" sx={{
                    fontFamily: "'Roboto', sans-serif !important",
                    fontSize:"16px",
                    fontWeight:"500",
                    color:theme.palette.primary.lightGrey,
                  transition:"all ease-in-out 0.4s",
                  "&:hover":{
                    color:theme.palette.primary.logoColor,
                    paddingLeft:"20px",
                  }
                }}>About Us</Typography> </Link>
              </ListItem>
              <ListItem sx={{
                  display: "block",
                  padding: "5px 0px",
                  width: "auto",         
                }}>
               <Link to="/blog"> <Typography variant="p" sx={{
                      fontFamily: "'Roboto', sans-serif !important",
                      fontSize:"16px",
                      fontWeight:"500",
                      color:theme.palette.primary.lightGrey,
                      transition:"all ease-in-out 0.4s",
                      "&:hover":{
                        color:theme.palette.primary.logoColor,
                        paddingLeft:"20px"
                      }
                }}>Blog & Articles</Typography></Link>
              </ListItem>
              <ListItem sx={{
                  display: "block",
                  padding: "5px 0px",
                  width: "auto",
                 
                }}>
              <Link to="/termsconditions"><Typography variant="p" sx={{
                    fontFamily: "'Roboto', sans-serif !important",
                    fontSize:"16px",
                    fontWeight:"500",
                    color:theme.palette.primary.lightGrey,
                    transition:"all ease-in-out 0.4s",
                    "&:hover":{
                      color:theme.palette.primary.logoColor,
                      paddingLeft:"20px"
                    }
                }}>Terms and Conditions</Typography></Link>
              </ListItem>
              <ListItem sx={{
                  display: "block",
                  padding: "5px 0px",
                  width: "auto",
                }}>
              <Link to="/privacypolicy"><Typography variant="p" sx={{
                   fontFamily: "'Roboto', sans-serif !important",
                   fontSize:"16px",
                   fontWeight:"500",
                   color:theme.palette.primary.lightGrey,
                   transition:"all ease-in-out 0.4s",
                   "&:hover":{
                     color:theme.palette.primary.logoColor,
                     paddingLeft:"20px",
                   }
                }}>Privacy Policy</Typography></Link>
              
              </ListItem>
              <ListItem sx={{
                  display: "block",
                  padding: "5px 0px",
                  width: "auto",
                }}>
               <Link to="/contactus">  <Typography variant="p" sx={{
                   fontFamily: "'Roboto', sans-serif !important",
                   fontSize:"16px",
                   fontWeight:"500",
                   color:theme.palette.primary.lightGrey,
                   transition:"all ease-in-out 0.4s",
                   "&:hover":{
                     color:theme.palette.primary.logoColor,
                     paddingLeft:"20px",
                   }
                }}>Contact us</Typography></Link>
              </ListItem>

            </List>
          </Box>
          <Box 
           sx={{
            width:  { xs: "100%", md: "100%", lg:"70%"},
            margin:"auto"
          }}>
                  <Typography variant="h6" sx={{ color: theme.palette.primary.logoColor, fontSize: "22px", fontWeight: "500", lineHeight: "42px", textTransform: "capitalize" }}>Contact Info</Typography>
            <List>

              <ListItem sx={{
                  display: "flex",
                  padding: "5px 0px",
                  width: "auto",
                  cursor: "pointer",
                  color:theme.palette.primary.lightGrey,
                  transition:"all ease-in-out 0.4s",
                  "&:hover":{
                    color:theme.palette.primary.logoColor,
                    paddingLeft:"20px"
                  }
                }}>
                    <ListItemIcon sx={{
                    minWidth:"30px",
                    display:"flex",
                    alignItems:"center",
                    width:"30px",
                    color:theme.palette.primary.logoColor
                   }}>
                    <CallIcon />
                  </ListItemIcon>
                <Typography variant="p" sx={{
                      fontFamily: "'Roboto', sans-serif !important",
                      fontSize:"16px",
                      fontWeight:"500",
                }}> {contactUsDetails && contactUsDetails.phone} </Typography>
              </ListItem>
              <ListItem sx={{
                  display: "flex",
                  padding: "5px 0px",
                  width: "auto",
                  cursor: "pointer",
                  color:theme.palette.primary.lightGrey,
                  transition:"all ease-in-out 0.4s",
                  "&:hover":{
                    color:theme.palette.primary.logoColor,
                    paddingLeft:"20px"
                  }
                }}>
                    <ListItemIcon sx={{
                    minWidth:"30px",
                    display:"flex",
                    alignItems:"center",
                    width:"30px",
                    color:theme.palette.primary.logoColor
                   }}>
                    <CallIcon />
                  </ListItemIcon>
                <Typography variant="p" sx={{
                    fontFamily: "'Roboto', sans-serif !important",
                    fontSize:"16px",
                    fontWeight:"500",
                }}>{contactUsDetails && contactUsDetails.phone}</Typography>
              </ListItem>
              <ListItem sx={{
                  display: "flex",
                  padding: "5px 0px",
                  width: "auto",
                  cursor: "pointer",
                  color:theme.palette.primary.lightGrey,
                  transition:"all ease-in-out 0.4s",
                  "&:hover":{
                    color:theme.palette.primary.logoColor,
                    paddingLeft:"20px"
                  }
                }}>
                  <ListItemIcon sx={{
                    minWidth:"30px",
                    display:"flex",
                    alignItems:"center",
                    width:"30px",
                    color:theme.palette.primary.logoColor
                   }}>
                    <MailIcon />
                  </ListItemIcon>
                <Typography variant="p" sx={{
                   fontFamily: "'Roboto', sans-serif !important",
                   fontSize:"16px",
                   fontWeight:"500",
                }}>{contactUsDetails && contactUsDetails.email}</Typography>
              </ListItem>
              <ListItem sx={{
                  display: "flex",
                  padding: "5px 0px",
                  width: "auto",
                  cursor: "pointer",
                  color:theme.palette.primary.lightGrey,
                  transition:"all ease-in-out 0.4s",
                  "&:hover":{
                    color:theme.palette.primary.logoColor,
                    paddingLeft:"20px"
                  }
                }}>
                <ListItemIcon sx={{
                    minWidth:"30px",
                    display:"flex",
                    alignItems:"center",
                    width:"30px",
                    color:theme.palette.primary.logoColor
                   }}>
                    <LocationOnIcon />
                  </ListItemIcon>
                 <Typography variant="p" sx={{
                   fontFamily: "'Roboto', sans-serif !important",
                   fontSize:"16px",
                   fontWeight:"500",
                }}>
                {contactUsDetails && contactUsDetails.address}</Typography>
              </ListItem>

            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

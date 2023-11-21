import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import React from "react";
import theme from "../Theme";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import KingBedIcon from "@mui/icons-material/KingBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useParams } from "react-router-dom";
import { GET_PRODUCT_DETAILS_PAGE_API, IMAGE_BASE_URL } from "../common/urls";
import { GetApiFetch } from "../common/CommonFunction";
import { useSelector } from "react-redux";
const PropertyDetailsLeftbar = () => {
  const propertyDetails = useSelector((state) => state.PropertyReducer.value);
  console.log("propertyDetails", propertyDetails);

// add review popup box 
const [open, setOpen] = useState(false);
const [rating, setRating] = useState(0);
const [comment, setComment] = useState('');
const [name, setName] = useState('');

const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const handleAddReview = () => {
  // Implement your logic to add the review (e.g., API call)
  console.log('Rating:', rating);
  console.log('Comment:', comment);
  console.log('Name:', name);
  // Close the dialog
  handleClose();
};



  return (
    <Box
      flex={2}
      paddingLeft={{ xs: "0px", md: "15px" }}
      paddingRight={{ xs: "0px", md: "15px" }}
    >
      <Box
        component={"div"}
        sx={{
          padding: "25px 30px 30px",
          background: theme.palette.primary.white,
          boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)",
          borderRadius: "6px",
          marginBottom: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "22px",
            color: "#212121",
            lineHeight: "30px",
            marginBottom: "25px",
            fontWeight: "500",
          }}
          variant="h6"
        >
          Overview
        </Typography>
        <Box
          className="details_icon_list"
          component="ul"
          sx={{
            display: "grid",
            gap: "30px 15px",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            alignItems: "center",
          }}
        >
          <Box
            component="li"
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              className="filter_btn"
              sx={{
                height: "50px",
                width: "53px",
                borderRadius: "8px",
                backgroundColor: theme.palette.primary.white,
                border: "1px solid rgb(232, 233, 241)",
                color: theme.palette.primary.logoColor,
                transition: "0.4s",
                boxShadow: "0 4px 18px 0 rgba(188, 192, 202, 0.26)",
              }}
            >
              <LocalOfferIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                  fontFamily: theme.palette.primary.Roboto,
                }}
                variant="h6"
              >
                ID No{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                }}
                variant="span"
              >
                {propertyDetails && propertyDetails._id}
              </Typography>
            </Box>
          </Box>
          <Box
            component="li"
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              className="filter_btn"
              sx={{
                height: "50px",
                width: "53px",
                borderRadius: "8px",
                backgroundColor: theme.palette.primary.white,
                border: "1px solid rgb(232, 233, 241)",
                color: theme.palette.primary.logoColor,
                transition: "0.4s",
                boxShadow: "0 4px 18px 0 rgba(188, 192, 202, 0.26)",
              }}
            >
              <NoCrashIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                  fontFamily: theme.palette.primary.Roboto,
                }}
                variant="h6"
              >
                Parking
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                }}
                variant="span"
              >
                {propertyDetails && propertyDetails.parking ? "Yes" : "No"}
              </Typography>
            </Box>
          </Box>
          <Box
            component="li"
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              className="filter_btn"
              sx={{
                height: "50px",
                width: "53px",
                borderRadius: "8px",
                backgroundColor: theme.palette.primary.white,
                border: "1px solid rgb(232, 233, 241)",
                color: theme.palette.primary.logoColor,
                transition: "0.4s",
                boxShadow: "0 4px 18px 0 rgba(188, 192, 202, 0.26)",
              }}
            >
              <KingBedIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                  fontFamily: theme.palette.primary.Roboto,
                }}
                variant="h6"
              >
                Bedroom
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                }}
                variant="span"
              >
                {propertyDetails && propertyDetails.bedroom}
              </Typography>
            </Box>
          </Box>
          <Box
            component="li"
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              className="filter_btn"
              sx={{
                height: "50px",
                width: "53px",
                borderRadius: "8px",
                backgroundColor: theme.palette.primary.white,
                border: "1px solid rgb(232, 233, 241)",
                color: theme.palette.primary.logoColor,
                transition: "0.4s",
                boxShadow: "0 4px 18px 0 rgba(188, 192, 202, 0.26)",
              }}
            >
              <BathtubIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                  fontFamily: theme.palette.primary.Roboto,
                }}
                variant="h6"
              >
                Bath
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                }}
                variant="span"
              >
                {propertyDetails && propertyDetails.bath}{" "}
              </Typography>
            </Box>
          </Box>
          <Box
            component="li"
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              className="filter_btn"
              sx={{
                height: "50px",
                width: "53px",
                borderRadius: "8px",
                backgroundColor: theme.palette.primary.white,
                border: "1px solid rgb(232, 233, 241)",
                color: theme.palette.primary.logoColor,
                transition: "0.4s",
                boxShadow: "0 4px 18px 0 rgba(188, 192, 202, 0.26)",
              }}
            >
              <ZoomOutMapIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                  fontFamily: theme.palette.primary.Roboto,
                }}
                variant="h6"
              >
                Sqft{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                }}
                variant="span"
              >
                {propertyDetails && propertyDetails.sqft}
              </Typography>
            </Box>
          </Box>
          <Box
            component="li"
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              className="filter_btn"
              sx={{
                height: "50px",
                width: "53px",
                borderRadius: "8px",
                backgroundColor: theme.palette.primary.white,
                border: "1px solid rgb(232, 233, 241)",
                color: theme.palette.primary.logoColor,
                transition: "0.4s",
                boxShadow: "0 4px 18px 0 rgba(188, 192, 202, 0.26)",
              }}
            >
              <LocationOnIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                  fontFamily: theme.palette.primary.Roboto,
                }}
                variant="h6"
              >
                Location
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                }}
                variant="span"
              >
                {propertyDetails && propertyDetails.state}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "25px 30px 30px",
          background: theme.palette.primary.white,
          boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)",
          borderRadius: "6px",
          marginBottom: "10px",
        }}
        component={"div"}
      >
        <Typography
          sx={{
            fontSize: "22px",
            color: "#212121",
            lineHeight: "30px",
            marginBottom: "25px",
            fontWeight: "500",
          }}
          variant="h6"
        >
          About This Listing
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "rgb(85, 85, 85)",
            lineHeight: "25px",
            marginBottom: "25px",
            fontWeight: "600",
            fontFamily: theme.palette.primary.Roboto,
          }}
          component={"p"}
        >
          {propertyDetails && propertyDetails.property_name} |{" "}
          {propertyDetails && propertyDetails.type} | Soon to be Available
        </Typography>
       
        <Typography
          sx={{
            fontSize: "16px",
            color: "rgb(85, 85, 85)",
            lineHeight: "28px",
            marginBottom: "25px",
            fontFamily: theme.palette.primary.Roboto,
          }}
          component={"p"}
        >
          {propertyDetails && propertyDetails.description}
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "25px 30px 30px",
          background: theme.palette.primary.white,
          boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)",
          borderRadius: "6px",
          marginBottom: "10px",
        }}
        component={"div"}
      >
        <Typography
          sx={{
            fontSize: "22px",
            color: "#212121",
            lineHeight: "30px",
            marginBottom: "25px",
            fontWeight: "500",
          }}
          variant="h6"
        >
          Features & Amenities
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "25px 30px 30px",
          background: theme.palette.primary.white,
          boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)",
          borderRadius: "6px",
          marginBottom: "10px",
        }}
        component={"div"}
      >
        <Typography
          sx={{
            fontSize: "22px",
            color: "#212121",
            lineHeight: "30px",
            marginBottom: "25px",
            fontWeight: "500",
          }}
          variant="h6"
        >
          Map Location
        </Typography>
        <Box className="map_box" component={"div"}>
          <img height={"100%"} width={"100%"} src="./assets/images/map.jpeg" />
        </Box>
      </Box>
      <Box
        sx={{
          padding: "25px 30px 30px",
          background: theme.palette.primary.white,
          boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)",
          borderRadius: "6px",
          marginBottom: "25px",
        }}
        component={"div"}
      >
        <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "30px",
              marginBottom: "50px",
            }}>
        <Typography
          sx={{
            fontSize: {
              xs:"16px",
              sm:"16px",
              md:"22px",
              lg:"22px",
            },
            color: "#212121",
            lineHeight: "22px",
            fontWeight: "500",
          }}
          variant="h6"
          component={"h3"}
        >
          Customer Reviews
        </Typography>
        <Button className="customBtnStyle"
                    sx={{
                      fontFamily:  theme.palette.primary.Roboto,
                      backgroundColor: theme.palette.primary.logoColor,
                      height: "40px",
                      padding:{
                        xs:"8px 10px",
                        sm:"8px 10px",
                        md:"8px 22px",
                        lg:"8px 22px",
                      },
                      fontSize: "14px",
                      lineHeight: "18px",
                      fontWeight: "500",
                      borderRadius:"8px",
                      color: theme.palette.primary.white,
                      "&:hover":
                      {
                        backgroundColor: theme.palette.primary.Green,
                      },
                    }} variant="contained" onClick={handleOpen}>
        Add Review
      </Button>
        </Box>
       
        <Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
              },
              gap: "30px",
            }}
            mb={1}
          >
            <Avatar
              sx={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
              }}
              alt="suraj"
              src="./assets/images/R6.jpg"
            />
            <Box>
              <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      color: "#212121",
                      lineHeight: "22px",
                      fontWeight: "600",
                      marginBottom: "10px",
                      fontFamily: theme.palette.primary.Roboto,
                    }}
                    variant="h6"
                    component={"h3"}
                  >
                    Suraj Banerjee
                  </Typography>
                  <Rating
                    sx={{
                      fontSize: "18px",
                    }}
                    name="customer-rating"
                    value={4}
                    readOnly
                  />
                </Box>
                <Typography sx={{
                 fontFamily: "'Roboto', sans-serif !important",
                 backgroundColor: "#dceeea",
                 color: theme.palette.primary.logoColor,
                 padding: "8px 22px",
                 fontSize: "14px",
                 lineHeight: "18px",
                 fontWeight: "500",
                 borderRadius:"8px",
                 border: "none",
                 overflow: "hidden",
                 position: "relative",
                 boxShadow: "none",
                 zIndex: "1",
                 textTransform: "capitalize",
                 "&:hover": {
                   backgroundColor: theme.palette.primary.logoColor,
                   color: theme.palette.primary.white,
                   boxShadow: "none",
                 }
                }} variant="h6" component={"h3"}>
                 Sep 3, 2020
                </Typography>
              </Box>

              <Typography variant="body1" mt={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Box>
          </Box>

          <Divider
            sx={{
              margin: "20px 0px",
            }}
          />
        </Box>
         <Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
              },
              gap: "30px",
            }}
            mb={1}
          >
            <Avatar
              sx={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
              }}
              alt="suraj"
              src="./assets/images/R6.jpg"
            />
            <Box>
              <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      color: "#212121",
                      lineHeight: "22px",
                      fontWeight: "600",
                      marginBottom: "10px",
                      fontFamily: theme.palette.primary.Roboto,
                    }}
                    variant="h6"
                    component={"h3"}
                  >
                    John Doe
                  </Typography>
                  <Rating
                    sx={{
                      fontSize: "18px",
                    }}
                    name="customer-rating"
                    value={4}
                    readOnly
                  />
                </Box>
                <Typography sx={{
                 fontFamily: "'Roboto', sans-serif !important",
                 backgroundColor: "#dceeea",
                 color: theme.palette.primary.logoColor,
                 padding: "8px 22px",
                 fontSize: "14px",
                 borderRadius:"8px",
                 lineHeight: "18px",
                 fontWeight: "500",
                 border: "none",
                 overflow: "hidden",
                 position: "relative",
                 boxShadow: "none",
                 zIndex: "1",
                 textTransform: "capitalize",
                 "&:hover": {
                   backgroundColor: theme.palette.primary.logoColor,
                   color: theme.palette.primary.white,
                   boxShadow: "none",
                 }
                }} variant="h6" component={"h3"}>
                 Sep 3, 2020
                </Typography>
              </Box>

              <Typography variant="body1" mt={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Box>
          </Box>

          <Divider
            sx={{
              margin: "20px 0px",
            }}
          />
        </Box>
        {/* Add more reviews as needed */}
        <Dialog fullWidth sx={{
          
        }} open={open} onClose={handleClose}>
        <DialogTitle>Add Review</DialogTitle>
        <DialogContent>
          <Box sx={{
            display:"grid",
            gap:"20px"
          }}>
          <Box>
            <Rating
              name="add-review-rating"
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
            />
          </Box>
          <TextField
                  fullWidth
                  id="outlined-adornment-name"
                  required
                  label="Enter your name"
                  variant="outlined"
                  value={name}
            onChange={(event) => setName(event.target.value)} />
          <TextField
            fullWidth
            id="outlined-adornment-name"
            required
            label="Type your message"
            multiline
            rows={4}
            variant="outlined"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
          </Box>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddReview} color="primary">
            Add Review
          </Button>
        </DialogActions>
      </Dialog>
      </Box>
    </Box>
  );
};

export default PropertyDetailsLeftbar;

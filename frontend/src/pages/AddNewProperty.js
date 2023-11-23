import {
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    FormControlLabel,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Tab,
    Tabs,
    TextField,
    Typography,
    Radio,
    FormLabel,
    RadioGroup,
    // CloudUploadIcon,
    // VisuallyHiddenInput
} from "@mui/material";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import VisuallyHiddenInput from '@mui/material/VisuallyHiddenInput';
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbsBanner from "../components/BreadcrumbsBanner";
import theme from "../Theme";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const AddNewProperty = () => {
    return (
        <>
            <Box>
                <Header />
            </Box>
               {/* <BreadcrumbsBanner /> */}
      <BreadcrumbsBanner title=" Add New Properties" />
            <Box
                component={"div"}
                sx={{
                    padding: {
                        xs: "60px 0px 40px",
                        sm: "30px 0px",
                        md: "50px 0px",
                        lg: "50px 0px",
                    },
                    backgroundColor: theme.palette.primary.white,
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        // backgroundColor: theme.palette.primary.BGColor,
                        height: "100%",
                        padding: {
                            xs: "0px 10px",
                            sm: "0px 10px",
                            md: "0px 0px",
                        },
                    }}
                >
                    <Box>
                        
                        <Box sx={{
                            display: {
                                xs: "block",
                                sm: "block",
                                md: "flex",
                                lg: "flex"
                            },
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "30px"

                        }}>

                        </Box>
                        <Box
                            sx={{
                                padding: "30px",
                                boxShadow:"0 5px 20px 0 rgba(23, 44, 82, 0.1)",
                                margin: {
                                    xs: "20px",
                                    sm: "20px",
                                    md: "30px",
                                    lg: "50px",
                                },
                                borderRadius: "20px",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: "500",
                                    marginBottom: "15px",
                                    fontSize: {
                                        xs: "20px",
                                        sm: "20px",
                                        md: "28px",
                                        lg: "28px",
                                    },
                                    textAlign: "center",
                                }}
                                variant="h4"
                                component={"h3"}
                            >
                                Create Listing
                            </Typography>
                            <Box
                                sx={{
                                    display: "grid",
                                    gap: "25px",
                                    margin: "25px 0px",
                                }}
                                component={"form"}
                            >
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    required
                                    label="Property Name"
                                    variant="outlined"
                                />
                                <Box
                                    sx={{
                                        display: {
                                            xs: "grid",
                                            sm: "grid",
                                            md: "flex",
                                            lg: "flex"
                                        },
                                        gap: "30px"
                                    }}
                                >
                                    <FormControl
                                        fullWidth
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    >
                                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                        <Select
                                            // labelId="demo-simple-select-label"
                                            // id="demo-simple-select"
                                            // value={age}
                                            label="Category"
                                            // onChange={handleChange}
                                            variant="outlined"
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <FormControl
                                        fullWidth
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    >
                                        <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
                                        <Select
                                            // labelId="demo-simple-select-label"
                                            // id="demo-simple-select"
                                            // value={age}
                                            label="Property Type"
                                            // onChange={handleChange}
                                            variant="outlined"
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                                <Box
                                    sx={{
                                        display: {
                                            xs: "grid",
                                            sm: "grid",
                                            md: "flex",
                                            lg: "flex"
                                        },
                                        gap: "30px"
                                    }}
                                >
                                    <FormControl
                                        fullWidth
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    >
                                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                        <Select
                                          
                                            label="Country"
                                            // onChange={handleChange}
                                            variant="outlined"
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        required
                                        label="Bedroom"
                                        type="number"
                                        variant="outlined"
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    />
                                   
                                </Box>

                                <Box
                                    sx={{
                                        display: {
                                            xs: "grid",
                                            sm: "grid",
                                            md: "flex",
                                            lg: "flex"
                                        },
                                        gap: "30px"
                                    }}
                                >
                                 
                                 <FormControl
                                        fullWidth
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    >
                                        <InputLabel id="demo-simple-select-label">State</InputLabel>
                                        <Select
                                            // labelId="demo-simple-select-label"
                                            // id="demo-simple-select"
                                            // value={age}
                                            label="State"
                                            // onChange={handleChange}
                                            variant="outlined"
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        required
                                        label=" Price"
                                        type="number"
                                        variant="outlined"
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        display: {
                                            xs: "grid",
                                            sm: "grid",
                                            md: "flex",
                                            lg: "flex"
                                        },
                                        gap: "30px"
                                    }}
                                >
 <FormControl
                                        fullWidth
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    >
                                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                                        <Select
                                            // labelId="demo-simple-select-label"
                                            // id="demo-simple-select"
                                            // value={age}
                                            label="City"
                                            // onChange={handleChange}
                                            variant="outlined"
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                    
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        required
                                        label="Bathroom"
                                        type="number"
                                        variant="outlined"
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    />
                                 

                                </Box>
                       
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    required
                                    id="outlined-basic"
                                    label="Description"
                                    variant="outlined"
                                />
                                <Box
                                    sx={{
                                        display: {
                                            xs: "grid",
                                            sm: "grid",
                                            md: "flex",
                                            lg: "flex"
                                        },
                                        gap: "30px"
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        required
                                        label="Square Feet"
                                        type="number"
                                        variant="outlined"
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    />
                                    <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />}
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: {
                                                xs: "25px",
                                                sm: "25px",
                                                md: "25px",
                                                lg: "30px",
                                            },
                                            padding: "16.5px 14px",
                                        }}
                                        className="upload_outline"
                                    >
                                        Upload file
                                        <VisuallyHiddenInput type="file" />
                                    </Button>

                                </Box>
                                <FormControl
                                        row
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "100%",
                                                lg: "100%"
                                            },
                                            flexDirection:
                                            {
                                                xs: 'column',
                                                sm: 'column',
                                                md: 'row',
                                                lg: 'row',
                                            },
                                            alignItems:
                                            {
                                                xs: "start",
                                                sm: "start",
                                                md: "center",
                                                lg: "center",
                                            },
                                            gap:
                                            {
                                                xs: "5px",
                                                sm: "5px",
                                                md: "10px",
                                                lg: "10px",
                                                xl:"30px",
                                            }
                                        }}
                                    >
                                        <FormLabel id="radio-buttons-group-label">Parking :</FormLabel>
                                        <RadioGroup
                                            variant="outlined"
                                            id="outlined-basic"
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                            row
                                            sx={{
                                                gap:
                                                {
                                                    xs: "5px",
                                                    sm: "5px",
                                                    md: "10px",
                                                    lg: "10px",
                                                    xl:"30px",
                                                }
                                            }}
                                        >
                                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" className="radio_btn" />
                                            <FormControlLabel value="No" control={<Radio />} label="No" className="radio_btn" />
                                        </RadioGroup>
                                    </FormControl>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: "center"
                                }}>
                                    <Button variant="contained"
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "15%",
                                            },
                                            borderRadius: "30px",
                                            // display: { xs: "flex", sm: "flex", lg: "flex" },
                                            alignItems: "center",
                                            justifyContent: "center",
                                            border: "1px solid #dceeea",
                                            color: theme.palette.primary.white,
                                            p: "10px",
                                            background: theme.palette.primary.logoColor,
                                            transition: "background-color 0.3s",
                                            boxShadow: "none",
                                            width: "210px",
                                            minWidth: "210px",
                                            minHeight: "45px",
                                            height: "45px",
                                            "&:hover": {
                                                backgroundColor: theme.palette.primary.logoColor,
                                                border: "none"
                                            },
                                        }}
                                    >Submit</Button>
                                </Box>
                                {/* <Box
                                    sx={{
                                        display: {
                                            xs: "grid",
                                            sm: "grid",
                                            md: "flex",
                                            lg: "flex"
                                        },
                                        gap: "30px"

                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        required
                                        label="Name"
                                        variant="outlined"
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    />
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        required
                                        label="Name"
                                        variant="outlined"
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    />

                                </Box> */}

                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        {/* Partner section  */}
        <Box
          className="partner_section"
          component={"section"}
          sx={{
            padding: "50px 0px",
            backgroundColor: theme.palette.primary.Green,
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              height: "100%",
              padding: {
                xs: "0px 10px",
                sm: "0px 10px",
                md: "0px 10px",
                lg: "0px 24px",
              },
            }}
          >
            <Box sx={{
              display: {
                xs: "grid",
                sm: "flex",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              justifyContent: "space-between",
              gap: "15px"
            }}>
              <Box
                className={"heading"}
                sx={{
                  textAlign: "left",

                }}
              >
                <Typography
                  variant="h4"
                  component={"h2"}
                  sx={{
                    fontSize: "30px",
                    fontWeight: "500",
                    lineHeight: "32px",
                    marginBottom: "10px",
                    color: theme.palette.primary.white,
                  }}
                >
                  Become a Real Estate Agent
                </Typography>
                <Typography
                  component={"p"}
                  sx={{
                    fontSize: "14px",
                    color: theme.palette.primary.white,
                  }}
                >
                  We only work with the best companies around the globe
                </Typography>
              </Box>
              <Button className="customBtnStyle"
                sx={{
                  fontFamily: "'Roboto', sans-serif !important",
                  backgroundColor: "#dceeea",
                  color: theme.palette.primary.logoColor,
                  padding: "8px 22px",
                  fontSize: "18px",
                  minHeight: "50px",
                  height: "50px",
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
                }} variant="contained" onClick={()=>{
                  window.location.href = "/AgentRegister";
                }}>Register Now</Button>
            </Box>



          </Container>
        </Box>
            <Box>
                <Footer />
            </Box>
        </>
    );
};

export default AddNewProperty;

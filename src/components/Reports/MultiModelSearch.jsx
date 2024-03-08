
import { useState } from 'react';
import { Box, Grid, Typography, TextField, Button, List, IconButton, Paper, Link, Autocomplete } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import UploadIcon from '@mui/icons-material/Upload';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Chart from '../dashboard/Chart';
import Deposits from '../dashboard/Deposits';
import Orders from '../dashboard/Orders';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];


function Copyright(props) {



  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function MultiModelSearch() {
  const [textPrompt, setTextPrompt] = useState('');
  const [selectedDatabase, setSelectedDatabase] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [Type, setType] = useState('');
  const [dataBase, setDataBase] = useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };
  const handleChangeDataBase = (event) => {
    setDataBase(event.target.value);
  };

  const handleTextPromptChange = (event) => {
    setTextPrompt(event.target.value);
  };

  const handleSelectedDatabaseChange = (event) => {
    setSelectedDatabase(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };
  async function postData(url, formData) {
    return fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Assuming the response is JSON, you can use response.text() for other types
    })
    .then(data => {
      console.log('Success:', data);
      return data;
      // Do something with the response data
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors here
    });
  }

  const handleImageSubmit = async() => {
    // You can implement your logic to send the image file to the server here
    // For example, using fetch or axios
    console.log('Image file:', imageFile);

  const formData = new FormData();
  formData.append("file", imageFile)
  // formData.append("text_prompt", textPrompt)
  // formData.append("dataBase", dataBase)
  // formData.append("model_type", Type)
  const url = 'http://127.0.0.1:8000/uploadfile'; // Replace with your API endpoint
  
  const responseData = await postData(url, formData);
  if(responseData){
    console.log('responseData', responseData);
  }
   
  };

  const [imageName, setImageName] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageName(file.name);
    }
  };
  return (
    <Box
      // component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        // flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        marginTop: "64px",
        width: "100vw"
      }}
    >

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={1}>

          <Grid item xs={12}>
            <Paper sx={{ p: 2, m: 2 }}>
              <Grid container spacing={1}>
                <Grid item
                  // xs={4}
                  xs={12} sm={6} md={4} style={{ maxWidth: '250px', margin: '0' }}
                >
                  <Box >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select multi mode type</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Type}
                        label="Select multi mode type"
                        onChange={handleChange}
                      >
                        <MenuItem value="Text Prompt">Text Prompt</MenuItem>
                        <MenuItem value="Upload File">Upload File</MenuItem>

                      </Select>
                    </FormControl>
                  </Box>
                </Grid>

                {Type=== "Text Prompt" ? <Grid item


                  xs={12} sm={6} md={4} style={{ maxWidth: '250px', margin: '0' }}
                >

                  <TextField
                    fullWidth
                    value={textPrompt}
                    onChange={handleTextPromptChange}
                    label="Text Prompt"
                    variant="outlined"
                    autoComplete="off"
                    placeholder='Text Prompt'
                  />
                </Grid> : ''}

                <Grid item
                  xs={12} sm={6} md={4} style={{ maxWidth: '250px', margin: '0' }}
                >
                   <Box >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Search Database</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={dataBase}
                        label="Search Database"
                        onChange={handleChangeDataBase}
                      >
                        <MenuItem value="clip_image_db">Clip Image Db</MenuItem>
                        <MenuItem value="autoencoder_image_db">Autoencoder Image Db</MenuItem>

                      </Select>
                    </FormControl>
                  </Box>

                 


                </Grid>
                <Grid item
                  xs={12} sm={6} md={4} style={{ maxWidth: '250px', margin: '0' }}
                // xs={12} md={8} lg={9}
                >
                  <Box
                    sx={{ display: "flex" }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{
                        display: 'none'
                      }}
                      id="image-upload"
                    />
                    <label htmlFor="image-upload">
                      <Button
                        sx={{
                          height: "53px"
                        }}
                        component="span"
                        variant="contained"
                        color="primary"
                        startIcon={<CloudUploadIcon sx={{ fontSize: "30px !important", margin: "0", padding: "0" }}
                        />}>

                      </Button>
                    </label>


                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleImageSubmit}
                      // startIcon={<UploadIcon />}
                      sx={{ marginLeft: '10px' }}
                    >
                      {Type=== "Text Prompt" ?  "submit" : 
                      Type=== "Upload File" ?
                      "Upload" : "Submit"  }
                    </Button>
                  </Box>



                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {/* Chart */}
          <Grid item xs={12} >
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 540,
              }}
            >
              <ImageList sx={{ height: 450 }}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={item.title}
                      subtitle={<span>by: {item.author}</span>}
                      position="below"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Paper>
          </Grid>



          {/* Recent Deposits */}
          <Grid item xs={12} height={450} sx={{ overflow: "scroll", background: "1px solid" }}>
            <Paper
            // sx={{
            //   p: 2,
            //   display: 'flex',
            //   flexDirection: 'column',
            //   height: 240,
            // }}
            >
              <Typography sx={{ margin: "10px" }}> Table Data</Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>


        </Grid>

      </Container>
    </Box>


  )

}
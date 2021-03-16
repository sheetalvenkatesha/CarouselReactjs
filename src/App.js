
import './App.css';
import { useState , useEffect} from "react";
//images for display
import image1 from './images/downloadD1.jpg';
import image2 from './images/download2.jpg';
import image3 from './images/download7.jpg';
import image4 from './images/downloadD3.jpg';
import image5 from './images/download5.jpg';
import image6 from './images/download6.jpg';
import image7 from './images/downloadD2.jpg';
import image8 from './images/downloadD4.jpg'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const defaultProps = {
  // bgcolor: 'background.paper',
  m: 1,
  // border: 1,
  style: { width: '25rem', height: '20rem', alignItem: 'center' },
};

//products list
const items = [
  {image: image1, names: 'Coke', price: 100, category:'Drinks'},
  {image: image2, names: 'Salted Lays', price: 200, category:'Snacks'},
  {image: image3, names: 'Vinegar Lays', price: 10, category:'Snacks'},
  {image: image4, names: 'Pepsi', price: 78, category:'Drinks'},
  {image: image5, names: 'Chile Lays', price: 20, category:'Snacks'},
  {image: image6, names: 'lightly salted', price: 20, category:'Snacks'},
  {image: image7, names: 'Sprite', price: 20, category:'Drinks'},
  {image: image8, names: 'Thumbs Up', price: 20, category:'Drinks'},

];
function App() {

  const [defaultValue, setDefaultValue] = useState('Snacks')
  const [finalList,setFinalList]=useState(items);
  //function to move to the next item
  const NextArrow = ({ onClick }) => {
    return (

      <div className="arrow next" onClick={onClick} style={{ fontSize: 30 }}>

        <text >&#8680;</text>

      </div>
    );
  };
//funtion to move to the previous item
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick} style={{ fontSize: 30 }}>
        <text>&#8678;</text>

      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
 //carousel settings
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),

  };
 
  return (
    <h3 style={{ textAlign: 'center' }}>Product Carousel
      <div className="AppBackground">
        <div>
          <select defaultValue={defaultValue}
            onChange={(target) => {
              setDefaultValue(target.value)
              setFinalList(items => { return items.filter(i => i.category === target.value)});
            }}>
            <option value="Snacks">Snacks</option>
            <option value="Drinks">Drinks</option>
            <option value="biscuits">Biscuits</option>
          </select>
          
        </div>
        <div className="App">
          <header className="App-header">
            <Slider {...settings}>
              {finalList.map((img, idx) => (
                
                <Box borderColor="text.primary" {...defaultProps} >
                  <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                    {/* <img src={img} alt={img} /> */}
                    <Grid item xs={4} style={{ marginLeft: '90px' }}>
                      <img src={img.image} alt={img} />
                    </Grid>

                    <Grid container spacing={2} style={{ marginLeft: '20px' }}>
                      <Grid item xs={4}>
                        <Paper style={{ fontSize: 15, border: '1px solid black' }}>Name</Paper>
                        <Paper style={{ fontSize: 15, border: '1px solid black' }}>Category</Paper>
                        <Paper style={{ fontSize: 15, border: '1px solid black' }}>Price</Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper style={{ fontSize: 15, border: '1px solid black' }}>{img.names}</Paper>
                        <Paper style={{ fontSize: 15, border: '1px solid black' }}>{img.category}</Paper>
                        <Paper style={{ fontSize: 15, border: '1px solid black' }}>{img.price}</Paper>
                      </Grid>
                    </Grid>

                    <br></br>



                  </div>
                </Box>
              ))}
            </Slider>
          </header>
        </div>
      </div>
    </h3>
  );
}

export default App;

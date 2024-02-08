import { Carousel } from "flowbite-react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProjectSlider = ({ images }) => {
  return (
    <div className="custom-carousel w-full lg:w-1/2 h-72 lg:h-72 shadow-lg hover:drop-shadow-glow rounded-lg  transition" >
      <Carousel
        pauseOnHover
        leftControl={<ArrowBackIosIcon />}
        rightControl={<ArrowForwardIosIcon />}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Proyecto ${index + 1}`}
            className="w-full h-full object-cover hover:scale-[1.01] transition duration-300 ease-out"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectSlider;

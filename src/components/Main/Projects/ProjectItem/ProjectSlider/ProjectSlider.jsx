import { Carousel } from "flowbite-react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProjectSlider = ({ images }) => {
  return (
    <Carousel
      slide={false}
      pauseOnHover
      leftControl={
        <ArrowBackIosIcon className="opacity-20 hover:opacity-100 transition-all" />
      }
      rightControl={
        <ArrowForwardIosIcon className="opacity-20 hover:opacity-100 transition-all" />
      }
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Proyecto ${index + 1}`}
          className="h-full object-cover transition duration-300 ease-out"
          loading="lazy"
        />
      ))}
    </Carousel>
  );
};

export default ProjectSlider;

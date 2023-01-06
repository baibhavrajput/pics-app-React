import ImageShow from "./ImageShow";

function ImageList(props) {
  const images = props.images;

  const renderedImages = images.map((image) => {
    return <ImageShow image={image} />;
  });

  return <div>{renderedImages}</div>;
}

export default ImageList;

function ImageShow(props) {
  const image = props.image;

  return <div>{image.alt_description}</div>;
}

export default ImageShow;

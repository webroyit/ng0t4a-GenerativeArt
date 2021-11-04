const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "https://hashlips/nft";

// Each name should match the name of the folder structures
// Order of these is important
// Meta data uses the name of the file for each folder
const layersOrder = [
  { name: "Background" },
  { name: "Eyeball" },
  { name: "Eye color" },
  { name: "Iris" },
  { name: "Shine" },
  { name: "Bottom lid" },
  { name: "Top lid" },
];

// Size of the image
const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,   // To show background of the image
  brightness: "80%",    // Color of the background
};

// Fail the program is there is too many matches
const uniqueDnaTorrance = 10000;

// Number of image to make
const editionSize = 10;

module.exports = {
  layersOrder,
  format,
  editionSize,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
};

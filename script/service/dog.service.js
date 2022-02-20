const getAllDogs = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const json = await response.json();

  return json.message;
};

const getRandomImageByBreed = async (breed) => {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  const json = await response.json();

  return json.message;
};

export { getAllDogs, getRandomImageByBreed };

import createImage from "./dom/createImage.js";
import { getAllDogs, getRandomImageByBreed } from "./service/dog.service.js";

async function main() {
  const list = document.querySelector(".list");
  const imageContainer = document.querySelector(".image-container");

  const dogs = await getAllDogs();

  const breeds = Object.keys(dogs);

  breeds.forEach((breed) => {
    const li = document.createElement("li");
    li.textContent = breed;
    li.addEventListener("click", async () => {
      const imageSrc = await getRandomImageByBreed(breed);

      const image = createImage(imageSrc);

      imageContainer.append(image);
    });

    list.append(li);
  });
}

main();

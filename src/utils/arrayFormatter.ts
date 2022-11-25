import { PostType } from "../types/postTypes";

export const shuffleArray = (array: PostType[]) => {
  return array
    .map((value: PostType) => ({ value, sort: Math.random() }))
    .sort((a: { sort: any }, b: { sort: any }) => a.sort - b.sort)
    .map(({ value }) => value);
};

export const shuffleArray2 = (array: PostType[]) => {
  const newArray = [...array];
  const length = newArray.length;

  for (let start = 0; start < length; start++) {
    const randomPosition = Math.floor(
      (newArray.length - start) * Math.random()
    );
    const randomItem = newArray.splice(randomPosition, 1);

    newArray.push(...randomItem);
  }

  return newArray;
};

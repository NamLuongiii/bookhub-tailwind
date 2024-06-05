import { faker } from "@faker-js/faker";

export const dumbBooks = [
  {
    id: "1",
    name: "Book A",
    cover: "https://shorturl.at/YNV4a",
  },
  {
    id: "2",
    name: "Book B",
    cover: "https://shorturl.at/YNV4a",
  },
  {
    id: "3",
    name: "Book C",
    cover: "https://shorturl.at/YNV4a",
  },
  {
    id: "4",
    name: "Book D",
    cover: "https://shorturl.at/YNV4a",
  },
  {
    id: "5",
    name: "Book E",
    cover: "https://shorturl.at/YNV4a",
  },
  {
    id: "6",
    name: "Book F",
    cover: "https://shorturl.at/YNV4a",
  },
  {
    id: "7",
    name: "Book G",
    cover: "https://shorturl.at/YNV4a",
  },
];

interface IBook {
  id: number | string;
  name: string;
  cover: string;
  length: number;
  chapters: number;
  review: string;
  originName: string;
}

export const createRandomBook = (): IBook => {
  return {
    id: faker.string.uuid(),
    name: faker.lorem.words(12),
    originName: faker.lorem.words(7),
    cover: faker.image.urlPlaceholder({ width: 100, height: 145 }),
    length: faker.number.int({ min: 40, max: 500 }),
    chapters: faker.number.int({ min: 4, max: 40 }),
    review: faker.lorem.paragraphs(7),
  };
};

export const createMultiRandomBook = (length: number = 7) => {
  return faker.helpers.multiple(createRandomBook, { count: length });
};

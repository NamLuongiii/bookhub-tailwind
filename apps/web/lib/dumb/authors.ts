import { faker } from "@faker-js/faker";

export interface IAuthor {
  id: number | string;
  name: string;
  avatar: string;
}

export const createRandomAuthor = (): IAuthor => {
  return {
    id: faker.string.uuid(),
    name: faker.lorem.words(4),
    avatar: faker.image.avatar(),
  };
};

export const createMultiRandomAuthors = (length: number = 7) => {
  return faker.helpers.multiple(createRandomAuthor, { count: length });
};

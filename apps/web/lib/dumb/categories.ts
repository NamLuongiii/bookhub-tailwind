import { faker } from "@faker-js/faker";

export interface ICategory {
  id: number | string;
  name: string;
}

export const createRandomCategory = () => {
  return {
    id: faker.string.uuid(),
    name: faker.lorem.words(4),
  };
};

export const createMultiCategories = (length: number = 7) => {
  return faker.helpers.multiple(createRandomCategory, { count: length });
};

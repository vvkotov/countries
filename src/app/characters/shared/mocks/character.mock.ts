import { Character } from '../models';

export const characterMock: Character = {
  _id: 1,
  allies: ['Allies 1', 'Allies 2'],
  createdAt: new Date().toISOString(),
  enemies: ['Enemies 1', 'Enemies 2'],
  films: ['Film 1', 'Film 2'],
  imageUrl: 'test-image-url',
  name: 'Name',
  parkAttractions: ['Park 1', 'Park 2'],
  shortFilms: ['Short 1', 'Short 2'],
  sourceUrl: 'test-source-url',
  tvShows: ['TV 1', 'TV 2'],
  updatedAt: new Date().toISOString(),
  url: 'test-url',
  videoGames: ['Video Game 1', 'Video Game 2'],
};

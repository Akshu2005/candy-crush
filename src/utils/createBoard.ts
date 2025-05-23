import { candies } from "./CandyData";

export const createBoard = (baordSize: number = 8) =>
  Array(baordSize * baordSize)
    .fill(null)
    .map(() => candies[Math.floor(Math.random() * candies.length)]);
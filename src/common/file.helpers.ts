import { readFileSync } from 'fs';
import { join } from 'path';

export const getFile = (fileName: string): number[] => {
  const file = readFileSync(join(process.cwd(), fileName)).toJSON().data;
  return file;
};

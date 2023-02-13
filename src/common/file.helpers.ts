import { readFileSync } from 'fs';
import { join } from 'path';
import { TFileBuffer } from './types';

export const getFileBuffer = (fileName: string): TFileBuffer => {
  const file = readFileSync(join(process.cwd(), fileName)).toJSON().data;
  return file;
};

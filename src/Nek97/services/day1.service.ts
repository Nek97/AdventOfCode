import { Injectable } from '@nestjs/common';
import {
  AsciiCode,
  isAsciiNumber,
  numFromAscii,
} from 'src/common/ascii.helper';
import { getFileBuffer } from 'src/common/file.helpers';
import { TFileBuffer } from 'src/common/types';
import {
  IElveCaloriesInfo,
  TElveCaloriesInfoList,
  TElvesCalories,
  TElvesCaloriesList,
} from '../dto/day.dto';

@Injectable()
export class Day1Service {
  private findMax3(elveCaloriesInfoList: TElveCaloriesInfoList): number[] {
    let relativeMax: number;
    const maxList = [
      elveCaloriesInfoList[0].total,
      elveCaloriesInfoList[0].total,
      elveCaloriesInfoList[0].total,
    ];
    elveCaloriesInfoList.forEach((elveCalories) => {
      relativeMax = elveCalories.total;
      maxList.forEach((max, i) => {
        if (relativeMax > max) {
          maxList[i] = relativeMax;
          relativeMax = max;
        }
      });
    });
    return maxList;
  }

  private findMax(elveCaloriesInfoList: TElveCaloriesInfoList): number {
    let max = elveCaloriesInfoList[0].total;
    elveCaloriesInfoList.forEach((elveCalories) => {
      if (elveCalories.total > max) {
        max = elveCalories.total;
      }
    });
    return max;
  }

  private processElvesCaloriesList(
    elvesCaloriesList: TElvesCaloriesList,
  ): TElveCaloriesInfoList {
    let total: number;
    const elvesCaloriesInfoList: TElveCaloriesInfoList = [];
    elvesCaloriesList.forEach((elvesCalories) => {
      total = 0;
      elvesCalories.forEach((calories) => {
        total += calories;
      });
      const elvesCaloriesInfo: IElveCaloriesInfo = {
        calories: elvesCalories,
        total,
      };
      elvesCaloriesInfoList.push(elvesCaloriesInfo);
    });
    return elvesCaloriesInfoList;
  }

  private parseData(fileBuffer: TFileBuffer) {
    let save: boolean;
    let number = 0;
    let buffer: TElvesCalories = [];
    const elvesCaloriesList: TElvesCaloriesList = [];
    fileBuffer.forEach((char) => {
      if (isAsciiNumber(char)) {
        save = false;
        number = number * 10 + numFromAscii(char);
      } else if (char === AsciiCode.LF) {
        if (save) {
          elvesCaloriesList.push(buffer);
          buffer = [];
          save = false;
        } else {
          save = true;
          buffer.push(number);
          number = 0;
        }
      }
    });
    if (number) {
      buffer.push(number);
    }
    if (buffer.length) {
      elvesCaloriesList.push(buffer);
    }
    return elvesCaloriesList;
  }

  private getData(): TElvesCaloriesList {
    const fileBuffer = getFileBuffer('/src/Nek97/inputs/day1.txt');
    const data = this.parseData(fileBuffer);
    return data;
  }

  private getElvesCalorieInfoList(): TElveCaloriesInfoList {
    const elvesCaloriesList = this.getData();
    return this.processElvesCaloriesList(elvesCaloriesList);
  }

  getStar1(): number {
    const elveCaloriesInfoList = this.getElvesCalorieInfoList();
    const max = this.findMax(elveCaloriesInfoList);
    return max;
  }

  getStar2(): number {
    const elveCaloriesInfoList = this.getElvesCalorieInfoList();
    const maxList = this.findMax3(elveCaloriesInfoList);
    console.log(maxList);
    return maxList[0] + maxList[1] + maxList[2];
  }
}

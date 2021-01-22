"use strict";

const inMemoryKeyStore: { [key: string]: number } = {
  "abc" : 0,
};

function getKeyUsageCountByDate(key: string, start: Date): number {
  //TODO search in db from start >= parameter
  if (inMemoryKeyStore[key] === undefined) inMemoryKeyStore[key] = 0;
  return inMemoryKeyStore[key];
}

export function checkAndIncrementKeyUsage(key: string): boolean {
  const startTime = new Date();
  startTime.setHours(-24); //TODO replace by process.env.VAR_NAME
  const callCount = getKeyUsageCountByDate(key, startTime);

  if (callCount >= 10) return true; //TODO replace 10 by +process.env.VAR_NAME

  inMemoryKeyStore[key] += 1;

  console.log(`Current key limit ${key} ${inMemoryKeyStore[key]}`);

  return false;
}
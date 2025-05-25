import { readFileSync } from 'fs';
const merchArray = readFileSync('merch_list.txt', 'utf-8').split('\n');
console.log(merchArray);
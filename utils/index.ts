import { file_keypairs } from './regex';
import { allowed_properties } from '../types/index';
import fs from 'fs';


const read_file = (file_path: string) => fs.readFileSync(file_path, 'utf-8');
const write_file = (file_path: string, data: string) => fs.writeFileSync(file_path, data, 'utf-8');


export const parse_keypairs = (data: string) => {
  const result: { n: string, v: string }[] = [];

  let is_mania = false;

  const total = data.split('\n');
  for (let i = 0; i < total.length; i++) {
    const d = total[i].trim();

    const parse = file_keypairs.exec(d);
    if (!parse) continue;

    if (parse.groups.name == 'Keys') is_mania = true;

    if (!d.startsWith(parse.groups.name)) continue;
    if (!allowed_properties.includes(parse.groups.name.split(/\d+/).join(''))) continue;

    result.push({ n: parse.groups.name, v: parse.groups.id.split('//')[0].trim() });
  };

  return result;
};


export { read_file, write_file };
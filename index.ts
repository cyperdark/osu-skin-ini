import { read_file, write_file, parse_keypairs } from './utils/index';
import { ini_type, ini_object } from './types';


const parse = (file_path: string): ini_type => {
  const result: ini_type = Object.assign({}, ini_object);
  const raw_data = read_file(file_path);

  let mania_object: any = {};
  let is_mania = false;

  // parse allowed properties & sort it
  const parse_pairs = parse_keypairs(raw_data);
  for (let i = 0; i < parse_pairs.length; i++) {
    const d = parse_pairs[i];

    if (d.n == 'Keys') {
      if (mania_object.Keys) {
        if (!result.Mania) result.Mania = [];
        result.Mania.push(mania_object);
        mania_object = {};
      };

      is_mania = true;
    };

    if (is_mania) mania_object[d.n] = d.v;
    // @ts-ignore
    else result[d.n] = d.v;
  };

  const object = Object.keys(result);
  for (let i = 0; i < object.length; i++) {
    const key = object[i];
    // @ts-ignore
    const value = result[key];
    if (typeof value == 'object') continue;
    // @ts-ignore
    if (value == -1) delete result[key];
    // @ts-ignore
    if (value == '') delete result[key];
  }

  return result;
};


export { parse as Parse };
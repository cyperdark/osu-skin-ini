import { read_file, write_file, parse_keypairs } from './utils/index';
import { ini_type, ini_object, ini_category } from './types';


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

  const array = Object.keys(result);
  for (let i = 0; i < array.length; i++) {
    const key = array[i];
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


const write = (input: ini_type) => {
  let result = '//Ini parser v0.1 // cyperdark#6890 // https://github.com/cyperdark/ck-tools\n';

  const groups: {
    General: object[];
    Colours: object[];
    Fonts: object[];
    CatchTheBeat: object[];
    Mania: object[];
  } = {
    General: [],
    Colours: [],
    Fonts: [],
    CatchTheBeat: [],
    Mania: input.Mania,
  };

  const array = Object.keys(input);
  for (let i = 0; i < array.length; i++) {
    const key = array[i];
    // @ts-ignore
    const value = input[key];
    if (typeof value == 'object') continue;

    const array_category = Object.keys(ini_category);
    for (let i = 0; i < array_category.length; i++) {
      const d = array_category[i];
      // @ts-ignore
      const dv = ini_category[d];

      const find = dv.includes(key);
      if (find) {
        // @ts-ignore
        groups[d].push({ n: key, v: value, });
        break;
      };
    };
  };

  const array_groups = Object.keys(groups);
  for (let i = 0; i < array_groups.length; i++) {
    const key = array_groups[i];
    // @ts-ignore
    const value = groups[key];
    if (value.length == 0) continue;

    result += `\n\n[${key}]\n`;

    for (let a = 0; a < value.length; a++) {
      const d = value[a];

      if (!d.n) {
        const destruct = Object.keys(d);
        destruct.filter(r => result += `${r == 'Keys' && a != 0 ? '\n\n' : ''}${r}: ${d[r]}\n`);

        continue;
      };

      result += `${d.n}: ${d.v}\n`;
      // result += `${d.n}: ${d.v}${i == array_groups.length - 1 && a == value.length - 1 ? '' : '\n'}`;
    };
  };

  return result;
};


export { parse as Parse, write as Write };
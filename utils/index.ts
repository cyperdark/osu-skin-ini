import fs from 'fs';

const read_file = (file_path: string) => fs.readFileSync(file_path, 'utf-8');
const write_file = (file_path: string, data: string) => fs.writeFileSync(file_path, data, 'utf-8');

export { read_file, write_file };
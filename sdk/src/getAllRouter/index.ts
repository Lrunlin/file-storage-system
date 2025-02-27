import fs from "fs";
import path from "path";

async function fileDisplay(filePath: string): Promise<string[]> {
  let fileList: string[] = [];

  function _fileDisplay(filePath: string): void {
    const files = fs.readdirSync(filePath);
    for (let index = 0; index < files.length; index++) {
      const filename = files[index];
      const filedir = path.join(filePath, filename); // 拼接路径用于 app.use
      const stats = fs.statSync(filedir);
      const isFile = stats.isFile();
      const isDir = stats.isDirectory();

      if (isFile) {
        fileList.push(filedir);
      }
      if (isDir) {
        _fileDisplay(filedir);
      }
    }
  }

  _fileDisplay(filePath);
  return fileList;
}

async function getAllRouter(src: string): Promise<string[]> {
  let fileList = await fileDisplay(src);
  return fileList;
}

export default getAllRouter;

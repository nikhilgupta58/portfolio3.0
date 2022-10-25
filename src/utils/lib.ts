import { IContenFulAsset } from "./type";

export const getFileLink = (id: string, asset: IContenFulAsset[]) => {
  if (asset) {
    for (let i = 0; i < asset.length; i++) {
      const row: IContenFulAsset = asset[i];
      if (id == row.sys.id) {
        return row.fields.file.url;
      }
    }
  }
  return "";
};

const colorSchemeArray = ["#E4EE89", "#81D8F7", "#FD2155", "#ffa500"];

export default function getRandomColor() {
  const index = Math.floor(Math.random() * colorSchemeArray.length);
  return colorSchemeArray[index];
}

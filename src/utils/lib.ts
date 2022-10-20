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

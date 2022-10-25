export interface IProjectField {
  fields: {
    id: string;
    hoverText: string;
    link: string;
    preview: {
      sys: {
        id: string;
      };
    };
    images: [
      {
        sys: {
          id: string;
        };
      }
    ];
    name: string;
  };
}

export interface IBlogField {
  fields: {
    category: string;
    id: string;
    link: string;
    title: string;
    description: string;
    preview: {
      sys: {
        id: string;
      };
    };
  };
}

export interface IContenFulAsset {
  sys: {
    id: string;
  };
  fields: {
    file: {
      url: string;
    };
  };
}

export interface IProjects {
  items: IProjectField[];
  includes: {
    Asset: IContenFulAsset[];
  };
}

export interface IBlogs {
  items: IBlogField[];
  includes: {
    Asset: IContenFulAsset[];
  };
}

export interface IProjectProp {
  id: string;
  hoverText: string;
  link: string;
  preview: string;
  images: [string];
  name: string;
}

export interface IBlogProp {
  id: string;
  title: string;
  description: string;
  preview: string;
  category: string;
  link: string;
}

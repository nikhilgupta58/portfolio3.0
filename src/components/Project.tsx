import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { client } from "../utils/contenful";
import { getFileLink } from "../utils/lib";
import { IProjectField, IProjectProp, IProjects } from "../utils/type";

export default function Project() {
  const [projects, setProjects] = React.useState<IProjectProp[]>([]);

  React.useEffect(() => {
    (async () => {
      const posts: IProjects | any = await client.getEntries({
        content_type: "projects",
      });
      let projects: any[] = [];
      posts?.items?.map((row: IProjectField) => {
        const item: any = {};
        const images: string[] = [];
        item["id"] = row.fields.id;
        item["name"] = row.fields.name;
        item["link"] = row.fields.link;
        item["preview"] = getFileLink(
          row.fields.preview.sys.id,
          posts.includes.Asset
        );
        row.fields.images.map((row) => {
          images.push(getFileLink(row.sys.id, posts.includes.Asset));
        });
        item["images"] = images;
        projects.push(item);
      });
      projects = projects.sort(function (a, b) {
        return a.id - b.id;
      });
      console.log(projects);
      setProjects(projects);
    })();
  }, []);

  return (
    <Flex direction={"column"}>
      <Flex w={"100%"}>
        <>My Portfolio</>
      </Flex>
    </Flex>
  );
}

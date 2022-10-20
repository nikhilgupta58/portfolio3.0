import { Flex, Text, Image, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { client } from "../utils/contenful";
import { getFileLink } from "../utils/lib";
import { IProjectField, IProjectProp, IProjects } from "../utils/type";
import HeadTag from "./HeadTag";
import HtmlTag from "./HtmlTag";

export default function Project() {
  const [projects, setProjects] = React.useState<IProjectProp[]>([]);
  const [hover, setHover] = React.useState(-1);
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
        item["hoverText"] = row.fields.hoverText;
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
    <>
      <Flex
        direction={"column"}
        p={{ base: "10px 0px", xl: "20px 40px" }}
        w={"100%"}
      >
        <Flex>
          <HeadTag text="My Portfolio" />
        </Flex>
        <HtmlTag tag="<p>" ml={{ base: "20px", md: "40px" }} />
        <Text
          w={{ base: "80vw", xl: "60vw" }}
          fontSize={{ base: "15px", md: "16px" }}
          color={"white"}
          ml={{ base: "30px", md: "60px" }}
          fontWeight={600}
        >
          A tiny selection of my latest work is displayed here. In relation to
          the complete list. It's only a drop in the bucket.
        </Text>
        <HtmlTag tag="</p>" ml={{ base: "20px", md: "40px" }} />
      </Flex>
      <Flex direction={"column"} mt="20px">
        <HtmlTag tag="<section>" />
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          my="10px"
        >
          {projects.map((row, id) => (
            <GridItem key={id} overflow="hidden" cursor={"pointer"}>
              <Flex
                opacity={0.5}
                onMouseOver={() => setHover(id)}
                onMouseOut={() => setHover(-1)}
                as={motion.div}
                transform="scale(1)"
                animate={
                  hover == id ? { opacity: 1, transform: "scale(1.5)" } : {}
                }
                position="relative"
              >
                <Image src={row.preview} />
                <Flex
                  bgColor={"cyan"}
                  color="#1f1f1f"
                  borderRadius={"999px"}
                  position="absolute"
                  top={"50%"}
                  left={"50%"}
                  justifyContent="center"
                  alignItems={"center"}
                  w={{
                    base: "60px",
                    xs: "80px",
                    sm: "80px",
                  }}
                  h={{
                    base: "60px",
                    xs: "85px",
                    sm: "80px",
                  }}
                  transform={"translate(-50%,-50%)"}
                  fontSize={{
                    base: "9px",
                    xs: "10px",
                  }}
                  letterSpacing="0.02em"
                  lineHeight={{
                    base: "10px",
                    xs: "11px",
                  }}
                  as={motion.div}
                  opacity="0"
                  animate={hover == id ? { opacity: 1 } : { opacity: 0 }}
                >
                  <Text
                    textAlign={"center"}
                    dangerouslySetInnerHTML={{ __html: row.hoverText }}
                  />
                </Flex>
              </Flex>
            </GridItem>
          ))}
        </Grid>
        <HtmlTag tag="</section>" />
      </Flex>
    </>
  );
}

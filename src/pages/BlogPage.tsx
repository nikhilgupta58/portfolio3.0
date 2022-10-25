import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import BlogBox from "../components/BlogBox";
import { IBlogProp } from "../utils/type";
import { useHeroContext } from "./Hero/utils/context";

export default function BlogPage() {
  const { blogs } = useHeroContext();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | Frontend Developer</title>
      </Helmet>
      <Flex
        direction={"column"}
        w="100%"
        justifyContent={"center"}
        alignItems="center"
      >
        <Flex direction="column" w="90%" justifyContent={"center"}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            my={"100px"}
            zIndex={10}
            gridGap={{
              base: "20px",
              sm: "20px",
              md: "30px",
              lg: "40px",
              xl: "50px",
            }}
            w={{ base: "initial", md: "100%" }}
          >
            {blogs.map((row: IBlogProp, id: any) => {
              return (
                <GridItem key={id} width="100%">
                  <BlogBox data={row} />
                </GridItem>
              );
            })}
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}

import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { useHeroContext } from "../pages/Hero/utils/context";
import { IBlogProp } from "../utils/type";
import BgTag from "./BgTag";
import BlogBox from "./BlogBox";

export default function Blog() {
  const { blogs } = useHeroContext();
  return (
    <Flex
      w={"100%"}
      alignItems={{ base: "inherit", md: "center" }}
      direction={{ base: "column", md: "row" }}
      position="relative"
      p={{ base: "10px 0px", xl: "20px 40px" }}
    >
      <BgTag text="BLOG" left={0} top={-20} />
      <Grid
        mx={{ base: "20px", md: "40px" }}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        mt={{
          base: "50px",
          xs: "70px",
          sm: "100px",
          md: "130px",
          lg: "200px",
        }}
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
  );
}

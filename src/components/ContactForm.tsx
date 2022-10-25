import { Box, Flex, Input, Textarea, useToast } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import React from "react";
import { useRef } from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import CustomTextArea from "./CustomTextarea";

export default function ContactForm() {
  const form = useRef<any>();
  const ref = useRef<any>();
  const toast = useToast();

  const [loading, setLoading] = React.useState(false);
  const onSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gdz1xfz",
        "template_m28xm8s",
        form.current,
        "2VLI5QFe2mbZEvfeD"
      )
      .then(
        (result) => {
          toast({
            position: "top",
            render: () => (
              <Box bgColor="brick" fontWeight={600} p={3} color="white">
                Sent Successfully
              </Box>
            ),
          });
          console.log(result.text);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={onSubmit} style={{ width: "100%" }}>
      <Flex direction={"column"} w="100%" gap={"10px"}>
        <Flex gap={"10px"}>
          <Flex w={"50%"}>
            <CustomInput placeholder="Name" name="user_name" />
          </Flex>
          <Flex w={"50%"}>
            <CustomInput placeholder="Email" type="email" name="user_email" />
          </Flex>
        </Flex>
        <Flex gap={"10px"}>
          <Flex w={"100%"}>
            <CustomTextArea placeholder="Message..." name="message" />
          </Flex>
        </Flex>
        <Flex gap={"10px"} mt="20px" w={"100%"} justifyContent="space-between">
          <Flex />
          <CustomButton
            h={{ md: "50px" }}
            letterSpacing={{ base: "0", md: "0.3em" }}
            onClick={() => ref.current.click()}
            isLoading={loading}
          >
            Send message!
          </CustomButton>
          <Input
            ref={ref}
            h={"50px"}
            display="none"
            letterSpacing="0.3em"
            type="submit"
          />
        </Flex>
      </Flex>
    </form>
  );
}

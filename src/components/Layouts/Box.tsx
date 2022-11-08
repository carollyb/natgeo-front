import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode
}

function BoxContainer({children}: Props) {
  return (
    <Flex
      backgroundColor="zinc"
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="50rem"
      gap={{base: '10px', md: '20px', lg: '40px'}}
      >
        {children}
    </Flex>
  );
}

export default BoxContainer;
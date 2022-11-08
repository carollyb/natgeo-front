import { 
    Flex
} from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode
}

function ContainerLayout({children}: Props) {
  return (
    <Flex
      m={{base: '10px', md: '70px', lg: '140px'}}
      gap={{base: '10px', md: '20px', lg: '40px'}}
      flexWrap='wrap'
      >
        {children}
    </Flex>
  );
}

export default ContainerLayout;
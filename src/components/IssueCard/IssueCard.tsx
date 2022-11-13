import {
  Flex,
  Text,
  Image,
  Button
} from "@chakra-ui/react";
import { useState } from "react"
import { BookOpen } from "phosphor-react";

type TCardProps = {
    number: number
    date: Date
    cover: string
    file: string
    language: string
    topics: string
}

function IssueCard({number, date, cover, file, language, topics}: TCardProps) {
  const [ mouseOver, setMouseOver ] = useState(false)
  return (
    <Flex
      w={'262px'}
      h={mouseOver ? '100%' : '439px'}
      direction={'column'}
      justify={'space-between'}
      align={'center'}
      p={'20px'}
      fontFamily={'Sen'}
      border={'solid'}
      borderWidth={'thin'}
      backgroundColor={'zinc'}
      borderColor={'zinc'}
      borderRadius={'10px'}
      boxShadow={'lg'}
      color={'mustard'}
      _hover={{
        borderColor: 'mustard'
      }}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      >
        <Flex
          w={'220px'}
          minHeight={'307px'}
          borderRadius={'10px'}
          overflow={'hidden'}>
            <Image
              objectFit="fill"
              w='100%'
              h='auto'
              alignItems='center'
              src={cover} />
        </Flex>
        <Text
          fontWeight={'bold'}
          fontSize={'20px'}
          textAlign={'center'}
          >Nº{number}</Text>
            {mouseOver && <Flex
            direction={'column'}
            align={'center'}>
                <Text
                >
                  Revista
                </Text>
                <Text
                >
                  {language}
                </Text>
                <Text
                >
                  {topics}
                </Text>
                <Button
                color={'white'}
                backgroundColor={'mustard'}
                gap={'15px'}
                _hover={{
                  backgroundColor: 'darkBrown'
                }}
                >
                  <BookOpen />
                    Acessar
                </Button>
            </Flex> }
        </Flex>
  );
}

export default IssueCard;
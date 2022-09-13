import {
  Flex,
  Text,
  Image,
  Button
} from "@chakra-ui/react";
import { useState, useContext } from "react"
import { BookOpen } from "phosphor-react";
import { GlobalContext } from "../../context/Context";

type TCardProps = {
    number: number
    date: Date
    cover: string
    file: string
    language: string
    topics: string
}

function IssueCard({number, date, cover, file, language, topics}: TCardProps) {
  const { url } = useContext<any>(GlobalContext)
  const [ mouseOver, setMouseOver ] = useState(false)
  return (
    <Flex
        w={'262px'}
        h={'439px'}
        direction={'column'}
        justify={'space-between'}
        align={'center'}
        p={'20px'}
        border={'solid'}
        borderColor={'lightGray'}
        borderRadius={'20px'}
        _hover={{
            h: '499px',
            boxShadow: 'lg'
        }}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        >
            <Flex
            w={'220px'}
            h={'307px'}
            borderRadius={'20px'}
            overflow={'hidden'}>
                <Image
                objectFit={'cover'}
                src="https://img.freepik.com/free-psd/books-cover-mockup_145224-172.jpg" />
            </Flex>
            <Text
            fontFamily={'sen'}
            fontWeight={'bold'}
            fontSize={'20px'}
            textAlign={'center'}
            >Nº{number}</Text>
            <Text
            fontFamily={'sen'}
            color={'lightGray'}
            textAlign={'center'}
            >
                {file}
            </Text>
            {mouseOver && <Flex
            direction={'column'}
            align={'center'}>
                <Text
                >
                    {cover}
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
                gap={'15px'}>
                    <BookOpen />
                    Acessar
                </Button>
            </Flex> }
        </Flex>
  );
}

export default IssueCard;
import {
  Flex,
  Button,
  InputGroup,
  InputRightElement,
  IconButton,
  Input,
  Text,
  useToast,
  useDisclosure
} from '@chakra-ui/react';
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from 'react';
import { FaUser, FaSearch } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

function HeaderComponent() {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ isAuth, setIsAuth ] = useState(false)
  const toast = useToast()
  const router = useRouter()
  
  return (
  <>
      <Flex
      bg={'darkBrown'}
      p={{base: '10px', md: '10px 70px 10px 70px', lg: '0 120px 0 120px'}}
      h={{base: 'auto', lg: '125px'}}
      direction={{base: isOpen ? 'column' : 'row', md: 'row'}}
      justify={{base: 'flex-start', md: 'space-between'}}
      align={{base: 'flex-start', md: 'center'}}
      gap={{base: isOpen ? '20px': '40px', md: '10px'}}
      >
          <Flex
          gap={'30px'}>
              <IconButton
                  size={'lg'}
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  aria-label={'Open Menu'}
                  display={{ base: 'flex', md: 'none' }}
                  onClick={isOpen ? onClose : onOpen}
                  />
              <Link href="/"><Text
              fontFamily={'Sen'}
              color={'mustard'}
              fontSize={'36px'}
              fontWeight={'bold'}>NatGeo</Text></Link>
          </Flex>

          <Flex
          p={isOpen ? '30px': '0px'}
          backgroundColor={isOpen ? 'backgroundSection': 'transparent'}
          border={'hidden'}
          borderRadius={isOpen ? '20px' : '0px'}
          m={{base: '10px', md: '10px 70px 10px 70px', lg: '0 120px 0 120px'}}
          h={{base: 'auto', lg: '125px'}}
          direction={{base: isOpen ? 'column' : 'row', md: 'row'}}
          justify={{base: 'flex-start', md: 'space-between'}}
          align={{base: 'flex-start', md: 'center'}}
          gap={{base: isOpen ? '20px': '30px', md: '50px'}}>
              <InputGroup
              display={{base: isOpen? 'flex' : 'none', md: 'flex'}}
              h={'47px'} 
              w={{base: '200px', md: '260px', lg: '582px'}}>
              <Input
              type={'text'}
              w={{base: '200px', md: '260px', lg: '582px'}}
              h={'47px'}
              boxShadow={'lg'}
              borderRadius={'7px'}
              borderColor={'darkBrown'}
              borderWidth={'thin'}
              fontFamily={'sen'}
              placeholder={'Busque um título'}
              _focus={{
                  boxShadow: 'md',
                  border: 'solid',
                  borderColor: 'mustard',
                  color: 'white'
              }} />
              <InputRightElement h={'full'}>
                  <IconButton
                  aria-label={'Search'}
                  variant={'ghost'}
                  icon={<FaSearch color={'white'} size='1em' />} />
              </InputRightElement>  
              </InputGroup>
              {isAuth ? 
              (<Flex
              display={{base: isOpen? 'flex' : 'none', md: 'flex'}}
              gap={'16px'}>
              <Button
              color={'white'}
              backgroundColor={'mustard'}
              onClick={() => router.push('/')}>
                  <FaUser />
              </Button>
              <Button
              color={'white'}
              backgroundColor={'mustard'}
              >Logout</Button>
              </Flex>) : 
              (
              <Flex
              display={{base: isOpen? 'flex' : 'none', md: 'flex'}}
              gap={'16px'}>
              <Button
              color={'mustard'}
              onClick={() => router.push('/login')}
              _hover={{
                backgroundColor: 'zinc'
              }}
              >Login</Button>
              <Button
              color={'white'}
              backgroundColor={'mustard'}
              onClick={() => router.push('/signup')}
              _hover={{
                backgroundColor: 'zinc'
              }}
              >Sign Up</Button>
            </Flex>)
          }
          </Flex>
          
      </Flex>
  </>);
}

export default HeaderComponent;
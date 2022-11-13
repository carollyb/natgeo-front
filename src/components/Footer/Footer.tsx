import { Box, Container, Stack, Text, Link, SimpleGrid } from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const footerContent = [
  {
    title: 'Viagem'
  },
  {
    title: 'Aventura'
  },
  {
    title: 'Culinária'
  },
  {
    title: 'Animais'
  },
  {
    title: 'Botânica'
  },
  {
    title: 'Literatura'
  },
]

const footerContentGenres = [
  {
    title: 'Cinema'
  },
  {
    title: 'Teatro'
  },
  {
    title: 'Exposições'
  },
  {
    title: 'Feiras'
  },
  {
    title: 'Dança'
  },
  {
    title: 'Vernissages'
  },
]

function FooterComponent() {
  return (
    <>
      <Box
        p={{md: '30px'}}
        bg={'darkBrown'}
        >
          <Container as={Stack} maxW={'6x1'} py={10} color={'black'}>
            <SimpleGrid
              templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
              spacing={8}>
              <Stack spacing={6}>
                <Box>
                  <Text
                    fontFamily={'Sen'}
                    color={'mustard'}
                    fontSize={'36px'}
                    fontWeight={'bold'}>NatGeo</Text>
                </Box>
                <Box>
                  <Text
                    fontFamily={'Roboto'}
                    color={'lightgray'}
                  >
                    A NatGeo é um website para compartilhamento de revistas digitais, permitindo o download e visualização
                  </Text>
                  </Box>
                  <Text
                    fontFamily={'Sen'}
                    fontSize={'15px'}
                    fontWeight={'bold'}>
                      Siga-nos
                  </Text>
                  <Stack 
                    direction={'row'}
                    spacing={6}>
                    <Link href='#'>
                      <FaInstagram />
                                </Link>
                                <Link href='#'>
                                    <FaTwitter />
                                </Link>
                                <Link href='#'>
                                    <FaLinkedin />
                                </Link>
                            </Stack>
                        </Stack>
                        <Stack
                          align={'flex-start'}
                          fontFamily={'sen'}>
                          <Text
                            fontWeight={'bold'}
                            color={'mustard'}
                            >Categorias</Text>
                              {footerContent && footerContent.map((item, key) => (
                                <Link
                                key={key}
                                >{item.title}</Link>
                              ))}
                        </Stack>
                        <Stack
                          align={'flex-start'}>
                          <Text
                            fontWeight={'bold'}
                            color={'mustard'}
                            >Cultura</Text>
                            {footerContentGenres && footerContentGenres.map((item, key) => (
                              <Link
                              key={key}
                              >
                              {item.title}
                              </Link>
                            ))}
                        </Stack>
                        <Stack
                          align={'flex-start'}
                          fontFamily={'sen'}>
                          <Text
                            fontWeight={'bold'}
                            color={'mustard'}
                            >Links</Text>
                          <Link href={'/'}>Sobre</Link>
                          <Link href={'/book'}>Revistas</Link>
                          <Link href={'/login'}>Login</Link>
                          <Link href={'/signup'}>Sign Up</Link>
                          <Link href={'#'}>FAQ</Link>
                        </Stack>
                        <Stack
                          align={'flex-start'}
                          fontFamily={'sen'}>
                          <Text 
                            fontWeight={'bold'}
                            color={'mustard'}
                            >Nossa Equipe</Text>
                          <Link href={'https://www.linkedin.com/in/carollybarbosa/'}>carolly B.</Link>
                        </Stack>
                    </SimpleGrid>
                </Container>
                <hr />
                <Container
                  as={Stack}
                  maxW={'6xl'}
                  py={4}
                  direction={{ base: 'column', md: 'row' }}
                  spacing={4}
                  justify={{ base: 'center', md: 'space-between' }}
                  align={{ base: 'center', md: 'center' }}
                  color={'mustard'}
                  fontFamily={'sen'}>
                    <Text>© 2022 NatGeo</Text>
                    <Stack direction={'row'} spacing={6}>
                        <Text
                          fontSize={'sm'}
                          flexDirection='unset'>
                          feito com ♡ por carolly barbosa
                        </Text>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}

export default FooterComponent;
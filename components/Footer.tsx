import {
    Box,
    Button,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    useColorMode,
    VisuallyHidden,
    Heading,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
  import { useState } from "react";
  import { BsSun, BsMoonStarsFill, BsLightbulb } from 'react-icons/bs';

  

  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [display, changeDisplay] = useState("none");
    return (
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
>


          <Heading size={'md'} >Wrine .</Heading>


          <Text>© 2022 Wrine Labs . All rights reserved</Text>
       
       {/* Social    <Stack
           direction={'row'} spacing={4}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
          */}
          <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        w="fit-content"
        >
        {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
          
        </Container>
        
      </Box>
    );
  }
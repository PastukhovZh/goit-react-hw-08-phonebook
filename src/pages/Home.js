import { Box, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

export default function Home() {


  const homeBox = {
    paddingTop: '180px',
  display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textShadow: ' black 1px 0 0px;'
}


  return (
    <Box sx={homeBox} >
      
      <Helmet>
        <title>My app</title>
      </Helmet>

      <Text
  bgGradient='linear(to-l, white, white)'
  bgClip='text'
  fontSize='5xl'
  fontWeight='extrabold'
>
        Welcome to my contact App
</Text>

    </Box>
  );
}

// https://img.freepik.com/free-vector/comic-pop-art-cloud-bubble-funny-speech-bubble-trendy-colorful-retro-vintage-background-in-pop-art-retro-comic-style-illustration-easy-editable_60438-1761.jpg?w=996&t=st=1668976677~exp=1668977277~hmac=5617bf7945b743ba2451fdf2f67762c6695a483d5d5ce6a3d06294d9fd1a9b6a
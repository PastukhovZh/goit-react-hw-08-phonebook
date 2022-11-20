import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Box } from '@chakra-ui/react';
export const Layout = () => {
  return (
    <Box maxW="570px" minH="999px"maxH='1000px' mx="auto" boxShadow='dark-lg' p='6' pl='80px' pr='80px' rounded='md' bg='white'
    backgroundImage="url('https://img.freepik.com/vector-premium/nueva-version-smartphone-negro-pantalla-blanca-blanco_115464-125.jpg?w=826')"
      backgroundPosition="center"
      backgroundSize='200%'
  backgroundRepeat="no-repeat">
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </Box>
  );
};

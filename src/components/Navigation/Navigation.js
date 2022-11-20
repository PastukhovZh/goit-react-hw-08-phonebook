import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Box } from '@chakra-ui/react';
// import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <NavLink to="/">
        <Box
  as='button'
          p={3}

  color='black'
  fontWeight='bold'
  borderRadius='full'
          _hover={{
                bgColor:'#add8e640'
  }}
>
        Home
</Box>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Box
  as='button'
          p={3}

  color='black'
  fontWeight='bold'
  borderRadius='full'
            mr='0'
            _hover={{
        bgColor:'#add8e640'
  }}
>Contacts</Box>
        </NavLink>
      )}
    </Box>
  );
};
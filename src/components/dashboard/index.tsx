// Chakra imports
import { Portal, Box, useDisclosure } from '@chakra-ui/react';
// Layout components
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import React, { Children, useState } from 'react';

// Routing
import routes from '@/routers';

// Custom Chakra theme
export default function DashboardLayout(props: any) {
  const { children, ...rest } = props;
  // states and functions
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const getActiveRoute = (routes: RoutesType[]): string => {
    let activeRoute = props.screenTitle;
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes: RoutesType[]): boolean => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };
  const getActiveNavbarText = (routes: RoutesType[]): string | boolean => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return activeNavbar;
  };
  const { onOpen } = useDisclosure();
  return (
    <Box>
      <Box
        minHeight='100vh'
        height='100%'
        overflow='auto'
        position='relative'
        maxHeight='100%'
        w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
        maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
        transition='all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
        transitionDuration='.2s, .2s, .35s'
        transitionProperty='top, bottom, width'
        transitionTimingFunction='linear, linear, ease'>
        <Portal>
          <Box>
            <Navbar
              onOpen={onOpen}
              logoText={props.screenTitle}
              brandText={props.screenTitle}
              secondary={getActiveNavbar(routes)}
              message={getActiveNavbarText(routes)}
              fixed={fixed}
              {...rest}
            />
          </Box>
        </Portal>

        <Box mx='auto' p={{ base: '20px', md: '30px' }} pe='20px' minH='100vh' pt='50px' mt='80px'>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
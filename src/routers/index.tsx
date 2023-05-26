import { Icon } from '@chakra-ui/react';
import React from 'react';
import { IoMdBriefcase, IoMdPaper } from 'react-icons/io';
import { MdBarChart, MdPerson, MdHome, MdLock, MdOutlineShoppingCart, MdAdd, MdSearch, MdMoney, MdSettings } from 'react-icons/md';

const routes = [
  {
    name: 'Início',
    roles: [5],
    system: 'veiculos',
    path: '/',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  },
  {
    name: 'Cadastrar Veículo',
    roles: [5],
    system: 'veiculos',
    path: '/veiculos/cadastrar',
    icon: <Icon as={MdAdd} width='20px' height='20px' color='inherit' />,
    secondary: true
  },
];

export default routes;

import { mode } from '@chakra-ui/theme-tools';
export const buttonStyles = {
	components: {
		Button: {
			baseStyle: {
				borderRadius: '16px',
				boxShadow: '45px 76px 113px 7px rgba(112, 144, 176, 0.08)',
				transition: '.25s all ease',
				boxSizing: 'border-box',
				_focus: {
					boxShadow: 'none'
				},
				_active: {
					boxShadow: 'none'
				}
			},
			variants: {
				outline: () => ({
					borderRadius: '16px'
				}),
				brand: (props: any) => ({
					bg: mode('yellow.500', 'yellow.400')(props),
					color: 'white',
					_focus: {
						bg: mode('yellow.500', 'yellow.400')(props)
					},
					_active: {
						bg: mode('yellow.500', 'yellow.400')(props)
					},
					_hover: {
						bg: mode('brand.600', 'yellow.400')(props)
					}
				}),
				darkBrand: (props: any) => ({
					bg: mode('brand.900', 'yellow.400')(props),
					color: 'white',
					_focus: {
						bg: mode('brand.900', 'yellow.400')(props)
					},
					_active: {
						bg: mode('brand.900', 'yellow.400')(props)
					},
					_hover: {
						bg: mode('brand.800', 'yellow.400')(props)
					}
				}),
				lightBrand: (props: any) => ({
					bg: mode('#F2EFFF', 'whiteAlpha.100')(props),
					color: mode('yellow.500', 'white')(props),
					_focus: {
						bg: mode('#F2EFFF', 'whiteAlpha.100')(props)
					},
					_active: {
						bg: mode('secondaryGray.300', 'whiteAlpha.100')(props)
					},
					_hover: {
						bg: mode('secondaryGray.400', 'whiteAlpha.200')(props)
					}
				}),
				light: (props: any) => ({
					bg: mode('secondaryGray.300', 'whiteAlpha.100')(props),
					color: mode('secondaryGray.900', 'white')(props),
					_focus: {
						bg: mode('secondaryGray.300', 'whiteAlpha.100')(props)
					},
					_active: {
						bg: mode('secondaryGray.300', 'whiteAlpha.100')(props)
					},
					_hover: {
						bg: mode('secondaryGray.400', 'whiteAlpha.200')(props)
					}
				}),
				action: (props: any) => ({
					fontWeight: '500',
					borderRadius: '50px',
					bg: mode('secondaryGray.300', 'yellow.400')(props),
					color: mode('yellow.500', 'white')(props),
					_focus: {
						bg: mode('secondaryGray.300', 'yellow.400')(props)
					},
					_active: { bg: mode('secondaryGray.300', 'yellow.400')(props) },
					_hover: {
						bg: mode('secondaryGray.200', 'yellow.400')(props)
					}
				}),
				setup: (props: any) => ({
					fontWeight: '500',
					borderRadius: '50px',
					bg: mode('transparent', 'yellow.400')(props),
					border: mode('1px solid', '0px solid')(props),
					borderColor: mode('secondaryGray.400', 'transparent')(props),
					color: mode('secondaryGray.900', 'white')(props),
					_focus: {
						bg: mode('transparent', 'yellow.400')(props)
					},
					_active: { bg: mode('transparent', 'yellow.400')(props) },
					_hover: {
						bg: mode('secondaryGray.100', 'yellow.400')(props)
					}
				})
			}
		}
	}
};

import { mode } from '@chakra-ui/theme-tools';
export const sliderStyles = {
	components: {
		RangeSlider: {
			variants: {
				main: (props: any) => ({
					thumb: {
						bg: mode('yellow.500', 'yellow.400')(props)
					}
				})
			}
		}
	}
};

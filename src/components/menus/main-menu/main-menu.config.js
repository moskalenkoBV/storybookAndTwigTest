import template from './main-menu.twig';
import globalConfig from '@root/global.config';

const data = {
	default: {
		items: [
			{
				url: 'https://adyax.com',
				title: 'Adyax HomePage'
			},
			{
				title: 'Menu item without url',
			},
			{
				url: 'https://google.com',
				title: 'Menu item with children',
				below: [
					{
						url: 'https://adyax.com',
						title: 'Adyax HomePage'
					},
					{
						title: 'Menu item without url',
					},
				]
			}
		]
	}
};

export default {
	template: (context) => (template({ ...globalConfig, ...context })),
	data
};
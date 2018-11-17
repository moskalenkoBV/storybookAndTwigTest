import template from './wysiwyg.twig';
import globalConfigClass from '@root/global.config';
import mainMenuConfig from '@components/menus/main-menu/main-menu.config';

const globalConfig = new globalConfigClass().configObject;

let data = {
	default: {
		title: 'Wysiwyg title',
		content: mainMenuConfig.template(mainMenuConfig.data.default) 
			+ mainMenuConfig.template(mainMenuConfig.data.default)
	}
};

data = {
	...data,

	variant_1: {
		...data.default,
		title: 'Wysiwyg title variant'
	}
};

export default {
	template: (context) => (template({ ...globalConfig, ...context })),
	data
};
import template from './article.twig';
import wysiwygConfig from '@components/paragraphs/wysiwyg/wysiwyg.config';
import globalConfigClass from '@root/global.config';

const globalConfig = new globalConfigClass().configObject;

let data = {
	'Default': {
		title: 'Article title',
		content: wysiwygConfig.template(wysiwygConfig.data.default)
	}
}

export default {
	template: (context) => (template({ ...globalConfig, ...context })),
	data
};
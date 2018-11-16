import globalConfig from '../global.config';
import capitalizeFirstLetter from './capitalizeFirstLetter';
import path from 'path';
import { storiesOf } from '@storybook/html';

const buildTree = configs => {
	configs.keys().forEach(filename => {
		const storyName = ('Components' + path.resolve(path.dirname(filename)).replace('-', ' '))
				.split('/')
				.map(item => capitalizeFirstLetter(item))
				.join('/'),
		componentName = path.basename(filename),
		data = configs(filename).default.data,
		template = configs(filename).default.template;

		if(!data || !template) return false;

		for (let key in data) {
			storiesOf(storyName, module)
			 	.add(key, () => (template(data[key])));
		}
	});
};

export default buildTree;

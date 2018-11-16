import drupalAttributes from './drupal_twig_features/attributes.js';

export default class GlobalConfig {
	constructor() {
		this.attributes = new drupalAttributes();
	}

	get configObject () {
		return {
			attributes: this.attributes 
		}
	}
};
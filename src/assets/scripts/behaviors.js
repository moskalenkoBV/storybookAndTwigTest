const behaviors = require.context('../../components', true, /.behavior.js$/);

behaviors.keys().forEach(filename => {
	behaviors(filename);
});
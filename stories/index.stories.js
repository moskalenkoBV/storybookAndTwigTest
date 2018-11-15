import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import template from '../templates/template.js';
import data from '../templates/template.context.js';

storiesOf('Demo', module)
  .add('With include (drupal approach)', () => ( template(data.variant_1) ))
  .add('Default using', () => ( template(data.default) ));

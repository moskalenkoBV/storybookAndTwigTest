import { configure } from '@storybook/html';
import path from 'path';
import buildTree from '../buildUtils/buildTree'

const configs = require.context('../components', true, /.config.js$/);

configure(buildTree(configs), module);

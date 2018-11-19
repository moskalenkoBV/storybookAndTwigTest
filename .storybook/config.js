import { configure, storyOf } from '@storybook/html';
import path from 'path';
import buildTree from '@root/buildUtils/buildTree'
import '../src/assets/styles/main.scss'

const configs = require.context('../src/components', true, /.config.js$/);

configure(buildTree(configs), module);

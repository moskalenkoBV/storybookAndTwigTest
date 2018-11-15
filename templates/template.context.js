import Twig from 'twig';
import d from './secondTemplate.twig';

const data = {
  default: {
    some_variable: 'variable value',
    some_param: 'param value'
  },
  variant_1: {
    some_variable: d({
      custom_variable: 'Custom Variable'
    }),
    some_variable_2: 'Some Variable 2'
  }
}

export default data;
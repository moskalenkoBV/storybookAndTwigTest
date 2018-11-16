import _ from 'lodash';

export default class drupalAttributes extends Array {
  constructor(it) {
    super(it);
    let self = this;
    self.classes = {};
    self.attr = {};

    this.addClass = (...str) => {
      let classesArr = _.flatten(str);
      classesArr.forEach((item) => {
        self.classes[item] = true;
      });
      return self;
    }

    this.removeClass = (...str) => {
      let classesArr = _.flatten(str);
      classesArr.forEach((item) => {
        if(self.classes[item] !== undefined) {
          delete self.classes[item];
        }
      });
      return self;
    }

    this.hasClass = (className) => {
      return !! self.classes[className];
    }

    this.removeAttribute = (attribute) => {
      if(self.attr[attribute] !== undefined) {
        delete self.attr[attribute]
      }
      return self;
    }

    this.setAttribute = (attribute, value) => {
      self.attr[attribute] = value;
      return self;
    }

    this.toString = () => {
      let classes_string = '',
          attr_string = '',
          output;

      for(let key in self.classes) {
        classes_string = `${classes_string} ${key}`;
      }

      for(let key in self.attr) {
        attr_string = `${attr_string} ${key}="${self.attr[key]}"`;
      }

      output = classes_string.length !== 0 ? `class="${classes_string.trim()}"` : '';
      output = attr_string.length !== 0  ? `${output} ${attr_string}` : output;

      return ' ' + output.trim();
    }
  }
};
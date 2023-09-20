'use strict';
function TemplateProcessor(template) {
    this.template = template;
}

TemplateProcessor.prototype.fillIn = function (dictionaryData) {
    const templateString = this.template;
    const placeholderRegex = /{{(.*?)}}/g;
    
    return templateString.replace(placeholderRegex, function (exactMatch, propertyName) {
    if (Object.prototype.hasOwnProperty.call(dictionaryData, propertyName)) {
      return dictionaryData[propertyName];
    } else {
      return "";
    }
  });
};


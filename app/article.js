const Document = require('jeffws-service/document');
const config   = require('../config/aws');
const uuid = require('uuid/v4');

const Article = Document(Object.assign({}, config, {
  tableName: 'Tutorial.Articles',
  partitionKey: 'ID',
  partitionKeyGenerator: uuid,
  timestamps: true
}));

module.exports = Article;

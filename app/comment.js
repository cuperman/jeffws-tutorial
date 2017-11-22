const Document = require('jeffws-service/document');
const config   = require('../config/aws');
const uuid = require('uuid/v4');

const Comment = Document(Object.assign({}, config, {
  tableName: 'Tutorial.Comments',
  partitionKey: 'ID',
  partitionKeyGenerator: uuid,
  sortKey: 'ArticleID',
  timestamps: true
}));

module.exports = Comment;

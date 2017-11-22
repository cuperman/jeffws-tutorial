const express = require('express');
const bodyParser = require('body-parser');

const articles = require('./app/article_handlers');
const comments = require('./app/comment_handlers');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const handleResponse = (fn) => {
  return (req, res) => {
    const event = {
      pathParameters: req.params,
      body: JSON.stringify(req.body)
    };
    const context = {};
    return fn(event, context, (errorMessage, response) => {
      if (errorMessage) {
        return res
          .status(500)
          .send(errorMessage);
      }
      return res
        .status(response.statusCode)
        .set(response.headers)
        .send(response.body);
    });
  };
};

// article resources
app.get    ('/api/articles',     handleResponse(articles.index));
app.post   ('/api/articles',     handleResponse(articles.create));
app.get    ('/api/articles/:id', handleResponse(articles.show));
app.put    ('/api/articles/:id', handleResponse(articles.update));
app.patch  ('/api/articles/:id', handleResponse(articles.update));
app.delete ('/api/articles/:id', handleResponse(articles.destroy));

// comment resources
app.get    ('/api/articles/:article_id/comments',     handleResponse(comments.index));
app.post   ('/api/articles/:article_id/comments',     handleResponse(comments.create));
app.get    ('/api/articles/:article_id/comments/:id', handleResponse(comments.show));
app.put    ('/api/articles/:article_id/comments/:id', handleResponse(comments.update));
app.patch  ('/api/articles/:article_id/comments/:id', handleResponse(comments.update));
app.delete ('/api/articles/:article_id/comments/:id', handleResponse(comments.destroy));

app.listen(3000);

const Resource = require('jeffws-service/resource');
const { HTTP_CREATED, HTTP_NO_CONTENT, HTTP_OK } = require('jeffws-service/resource/status_codes');
const Article = require('./article');

// GET /articles
exports.index = Resource.handler((request, render) => {
  return Article.all()
    .then(data => {
      render({ status: HTTP_OK, body: data });
    });
});

// GET /articles/:id
exports.show = Resource.handler((request, render) => {
  return Article.find(request.params.id)
    .then(data => {
      render({ status: HTTP_OK, body: { article: data } });
    });
});

// POST /articles
exports.create = Resource.handler((request, render) => {
  return Article.create(request.body.article)
    .then(data => {
      render({ status: HTTP_CREATED, body: { article: data } });
    });
});

// PATCH/PUT /articles/:id
exports.update = Resource.handler((request, render) => {
  return Article.update(request.params.id, request.body.article)
    .then(data => {
      render({ status: HTTP_OK, body: { article: data } });
    });
});

// DELETE /articles/:id
exports.destroy = Resource.handler((request, render) => {
  return Article.destroy(request.params.id)
    .then(() => {
      render({ status: HTTP_NO_CONTENT });
    });
});

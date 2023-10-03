// Search functionality
app.get('/api/blog-search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const searchResults = _.filter(blogData, (blog) =>
      _.includes(_.toLower(blog.title), query)
    );
  
    res.json(searchResults);
  });
  
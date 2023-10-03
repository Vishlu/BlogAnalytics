const memoizedBlogStats = _.memoize(async () => {
    // Fetch data and perform analysis here
  }, () => {
    // Define a caching key based on request parameters or time
    return 'blog-stats'; // Example caching key
  });
  
  // Middleware to fetch cached or fresh blog statistics
  app.get('/api/blog-stats', async (req, res) => {
    try {
      const cachedResults = await memoizedBlogStats();
      res.json(cachedResults);
    } catch (error) {
      console.error('Error fetching cached blog data:', error);
      res.status(500).json({ error: 'Failed to fetch cached blog data' });
    }
  });
  
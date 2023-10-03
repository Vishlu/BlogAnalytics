// Inside the try block after data analysis
const responseObject = {
    totalBlogs,
    longestBlog: longestBlog.title,
    blogsWithPrivacy: blogsWithPrivacy.length,
    uniqueBlogTitles: _.map(uniqueBlogTitles, 'title'),
  };
  
  res.json(responseObject);
  
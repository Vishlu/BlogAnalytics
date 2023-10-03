const _ = require('lodash');

// Inside the try block after fetching data
const totalBlogs = blogData.length;
const longestBlog = _.maxBy(blogData, 'title');
const blogsWithPrivacy = _.filter(blogData, (blog) =>
  _.includes(_.toLower(blog.title), 'privacy')
);
const uniqueBlogTitles = _.uniqBy(blogData, 'title');

// Continue with response creation

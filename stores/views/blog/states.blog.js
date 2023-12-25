const state = () => ({
    lastBlog: null,
    blogs: [],
    isExistBlogs: false,
    limit: 3,
    offset: 0,    
    isLoading: true,
    singleBlog: null
});

export default state;
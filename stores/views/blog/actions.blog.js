const actions = {

    async getBlogs() {
        const data = await $fetch('/api/blogs/getByLimit', {
            method: 'GET',
            params: {
                offset: this.offset,
                limit: this.limit
            }
        })

        this.blogs = [...this.blogs, ...data];
        if (data.length < this.limit) this.isExistBlogs = true;
        if (data.length > 0) {
            this.offset += this.limit
        }
        this.isLoading = false
    },

    async getLastBlog() {
        const data = await $fetch('/api/blogs/getLast', { method: 'GET' });
        this.lastBlog = data[0]
    },

    async getSingleBlog(id) {
        const data = await $fetch(`/api/blogs/${id}`, {
            method: 'GET'
        })
        this.singleBlog = data[0];
    }
}

export default actions
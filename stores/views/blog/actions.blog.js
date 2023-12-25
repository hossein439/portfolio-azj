const actions = {

    async getBlogs() {
        const limit = 3;
        let offset = 0;

        const data = await $fetch('/api/blogs/getByLimit', {
            method: 'GET',
            params: {
                offset,
                limit
            }
        })

        this.value = [...this.blogs, ...data];
        if (data.length < limit) this.isExistBlogs = true;
        if (data.length > 0) {
            offset += limit
        }
    },

    async getLastBlog() {
        const { lastBlog } = await useFetch('/api/blogs/getLast');
        this.lastBlog = lastBlog
    }
}

export default actions
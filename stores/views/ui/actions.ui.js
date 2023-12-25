const actions = {
    handleToggel() {
        this.isToggled = !this.isToggled
        this.activeSection = false
    },

    handleActiveSection() {
        this.activeSection = !this.activeSection
    },

    async getImageLanding() {
        const dataImage = await $fetch(`/api/settings/landing`, { method: 'GET' })
        return dataImage[0].data;
    }
}

export default actions
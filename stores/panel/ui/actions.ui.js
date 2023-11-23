const actions = {
    handleToggel() {
        this.isToggled = !this.isToggled
        this.activeSection = false
    },

    handleActiveSection() {
        this.activeSection = !this.activeSection
    }
}

export default actions
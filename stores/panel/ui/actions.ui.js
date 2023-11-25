import axios from 'axios'
const actions = {
    handleToggel() {
        this.isToggled = !this.isToggled
        this.activeSection = false
    },

    handleActiveSection() {
        this.activeSection = !this.activeSection
    },

    async getImageLanding() {
        const dataImage = await axios.get(`http://localhost:4000/setting/landing`)
        return dataImage.data[0].data;
    }
}

export default actions
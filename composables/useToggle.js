export function useToggle() {
    const isToggled = ref(true);

    const handleToggle = () => {
        isToggled.value = !isToggled.value;
    }

    watch(isToggled, () => {
        isToggled.value = !isToggled.value;
    })

    return { isToggled, handleToggle }
}

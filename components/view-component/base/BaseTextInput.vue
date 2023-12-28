<template>
    <div>
        <label :for="name" class="capitalize block text-sm font-medium leading-6 text-gray-900">{{ label }}</label>
        <input @input="onInput($event)" @blur="handleBlur" v-model="model" v-bind="$attrs" :name="name" :id="id"
            :rules="rules"
            class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            placeholder="">
        <span v-if="hasError" class="error">{{ errors[0] }}</span>

    </div>
</template>

<script setup>


const props = defineProps({
    modelValue: {
        type: String
    },
    name: {
        type: String
    },
    id: {
        type: String
    },
    label: {
        type: String
    },
    type: {
        type: String,
        default: 'text'
    },
    rules: {
        type: String,
        default: 'required'
    }
})
const emits = defineEmits(['update:modelValue'])

const { value: model, errorMessage, handleBlur } = useField(
    () => props.name,
);

watch(
    () => props.modelValue,
    (newValue) => {
        model.value = newValue;
    }
);

const onInput = (event) => {
    model.value = event.target.value;
    emits('update:modelValue', event.target.value)
}
const hasError = computed(() => errorMessage.value !== null)
const errors = computed(() => errorMessage.value ? [errorMessage.value] : [])

</script>

<style scoped>
.error {
    color: red;
}
</style>
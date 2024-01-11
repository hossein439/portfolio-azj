<template>
    <div class="w-full flex flex-col h-full">
        <label :for="name" class="capitalize block text-sm font-medium leading-6 text-gray-900">{{ label }}</label>
        <textarea @input="onInput($event)" @blur="handleBlur" v-model="model" v-bind="$attrs" :name="name" :id="id"
            :rules="rules"
            class="block w-full h-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6">
        </textarea>
        <span v-if="hasError" class="error">{{ errors[0] }}</span>
    </div>
</template>

<script setup>
import { defineRule, useField } from 'vee-validate';

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
    rules: {
        type: String,
        default: null
    }
})
const emits = defineEmits(['update:modelValue'])

const fieldOption = {
    initialValues: props.modelValue,
    snyncVmodel: true,
    label: props.label,
    bails: false
}

defineRule('required', value => {
    if (!value || !value.length) {
        return 'This field is required';
    }
    return true;
});

const { meta, errorMessage, handleChange, value: fieldValue, validate } = useField(props.name, props.rules, fieldOption)


const onUpdate = async (value) => {
    emits('update:modelValue', value)
    handleChange(value, false)
    const validateResult = await validate()
    emits('changed:errors', validateResult)
}

const onInput = (event) => {
    const text = event.target.value
    onUpdate(text)
}

const hasError = computed(() => errorMessage.value !== null)
const errors = computed(() => errorMessage.value ? [errorMessage.value] : [])

</script>

<style scoped>
.error {
    color: red;
}
</style>
<template>
  <div>
    <q-datetime type="datetime"
                color="primary"
                :error="invalidAndDirty"
                :float-label="label"
                :value="value"
                :format="format"
                :placeholder="placeholder"
                @input="change($event)"
    ></q-datetime>
    <span class="label text-red"
          v-for="(key, index) in messageKeys"
          v-if="!validation[key] && validation.$dirty"
          :key="index">
      {{validationMessages[key]}}
    </span>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'DateTimeInput',
    props: {
      format: {
        type: String
      },
      validation: {
        type: Object,
        required: true
      },
      value: {
        required: true
      },
      validationMessages: {},
      label: {},
      placeholder: {}
    },
    computed: {
      messageKeys () {
        return Object.keys(this.validationMessages)
      },
      validAndDirty () {
        return !this.validation.$invalid && this.validation.$dirty
      },
      invalidAndDirty () {
        return this.validation.$invalid && this.validation.$dirty
      }
    },
    methods: {
      change (value) {
        this.validation.$touch()
        this.$emit('input', value)
      }
    }
  }
</script>
<style scoped>
  .error {
    color: #DB2828;
  }
</style>

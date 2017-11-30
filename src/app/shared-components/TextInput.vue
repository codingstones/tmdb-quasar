<template>
  <div>
    <div>
      <q-input color="primary" required :error="invalidAndDirty"
             :value="value"
             @input="change($event)"
             :float-label="label"/>
        <span id='datetime-validation-error' class="error"
              v-for="(key, index) in messageKeys"
              v-if="!validation[key] && validation.$dirty"
              :key="index">
          {{validationMessages[key]}}
        </span>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'TextInput',
    props: {
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
    data () {
      return {}
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

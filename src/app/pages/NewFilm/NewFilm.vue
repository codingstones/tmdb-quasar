<template>
  <div class="layout-padding">
      <h4>Add a New Film to TmDB!</h4>
      <TextInput
        label="Insert Film Title"
        v-model="title"
        :validation="$v.title"
        :validation-messages="validationMessages.title"
        placeholder="Type name of film"
      ></TextInput>
      <DateTimeInput
        format="YYYY/MM/DD - hh:mm"
        label="Date and time"
        v-model="dateTime"
        :validation="$v.dateTime"
        :validation-messages="validationMessages.dateTime"
        :value="dateTime"
      ></DateTimeInput>
      <br><br>
      <FormButton class="full-width" :onClick="save"
                  :disabled="$v.$invalid" :isLoading="loading">
        Create Film
      </FormButton>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { required, minLength, maxLength } from 'vuelidate/lib/validators'
  import { CREATE_FILM } from '../../services/repositories/backend-commands'
  import { createFilmPayload } from '../../services/repositories/tmdb-payloads'
  import TextInput from '../../shared-components/TextInput.vue'
  import DateTimeInput from '../../shared-components/DateTimeInput.vue'
  import { isFutureDatetime } from './customValidations'

  export default {
    validations: {
      title: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(20)
      },
      dateTime: {
        required,
        isFutureDatetime
      }
    },
    data () {
      return {
        title: '',
        dateTime: '',
        validationMessages: {
          title: {
            required: 'Name is required.',
            minLength: 'Minimum 5 characters.',
            maxLength: 'Maximum 20 characters.'
          },
          dateTime: {
            required: 'Date and time of gig are required.',
            isFutureDatetime: 'You cannot set a film in a past date :('
          }
        }
      }
    },
    computed: {
      ...mapState(['loading'])
    },
    methods: {
      ...mapActions([CREATE_FILM]),
      async save() {
        try {
          await this.create_film(createFilmPayload(this.title, this.dateTime))
          this.tmdbRouter.navigateToPopularFilms()
        }
        catch (error) {
          console.log('Error creating ', error)
        }
      }
    },
    components: {
      TextInput, DateTimeInput
    }
  }
</script>

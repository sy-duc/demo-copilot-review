import { defineComponent, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { helpers, required, email, minLength } from '@vuelidate/validators'
import { useValidate } from '@/composables/useValidate'

export default defineComponent({
  name: 'LoginForm',
  setup() {
    const { t } = useI18n()

    // Reactive form data
    const account = reactive({
      username: '',
      password: '',
    })

    // Create validation rules
    const rules = {
      username: {
        required: helpers.withMessage(t('error.MSG001', [t('login.username')]), required),
        email: helpers.withMessage(t('error.MSG003', [t('login.username')]), email),
      },
      password: {
        required: helpers.withMessage(t('error.MSG001', [t('login.password')]), required),
        minLength: helpers.withMessage(t('error.MSG002', [t('login.password'), 6]), minLength(6)),
      },
    }

    // Use Vuelidate
    const { v$, validateField } = useValidate(rules, account)

    // Handle form submission
    const handleSubmit = async () => {
      v$.value.$touch()
      if (v$.value.$invalid) {
        return
      }
      // Handle successful login here
      console.log('Login successful!')
    }

    return {
      account,
      v$,
      handleSubmit,
      validateField,
    }
  },
})

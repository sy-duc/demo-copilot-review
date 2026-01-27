import { defineComponent, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { helpers, required, email, minLength } from '@vuelidate/validators'
import { useValidate } from '@/composables/useValidate'
import AuthService from '@/api/services/AuthService'

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
      
      try {
        const response = await AuthService.login(account.username, account.password)
        console.log('Login successful!', response.token)
        // Lưu token vào localStorage
        localStorage.setItem('authToken', response.token)
      } catch (error) {
        console.error('Login failed:', error)
      }
    }

    return {
      account,
      v$,
      handleSubmit,
      validateField,
    }
  },
})

import useVuelidate from '@vuelidate/core'

/**
 * Hook `useValidate` giúp quản lý validation cho form
 * @param rules - Schema validation từ Vuelidate
 * @param form - Object chứa dữ liệu form
 */
export const useValidate = (rules: any, form: any) => {
  const v$ = useVuelidate(rules, form)

  /**
   * Validate từng field khi `blur`
   * @param field - Tên field cần validate
   */
  const validateField = (field: string) => {
    if (v$.value[field]) {
      v$.value[field].$touch()
    }
  }

  return {
    v$,
    validateField,
  }
}

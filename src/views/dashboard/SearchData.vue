 <script>
import { ref } from "vue";
import BaseInput from "@/components/form/BaseInput.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import ValidationErrors from "@/components/form/ValidationErrors.vue";
import FormProvider from "@/components/form/FormProvider";
import { required, email, sleep } from "/src/utils";
import { useValidation, ValidationError } from "vue3-form-validation";
import DataTable from "@/views/dashboard/DataTable.vue";
export default {
  name: "Login",
  components: {
    BaseInput,
    BaseButton,
    FormProvider,
    ValidationErrors,
    DataTable
  },
  setup() {
    const loading = ref(false);
    let resetTable = ref(false);
    let componentKey = ref(0);
    let modelsearch = ref([]);
    const { form, errors, submitting, validateFields, resetFields } =
      useValidation({
        email: {
          $value: "",
          $rules: [email(" * ระบุ email ให้ถูกต้อง ")]
        },
        password: {
          $value: "",
          $rules: [required(" * ระบุ password ให้ถูกต้อง ")]
        }
      });
    (async function () {
      loading.value = true;
      await sleep(1000);
      loading.value = false;
    })();
    const handleSubmit = async () => {
      try {
        let formData = await validateFields();
        modelsearch.value = formData;
        resetTable.value = false;
        componentKey.value += 1;
      } catch (e) {
        if (e instanceof ValidationError) {
          console.log(e.message);
          modelsearch.value.email = "";
          modelsearch.value.password = "";
        }
      }
    };
    const handleClear = async () => {
        let formData = await resetFields();
        modelsearch.value = formData;
        resetTable.value = true;
        componentKey.value += 1;
    };
    return {
      form,
      errors,
      loading,
      handleSubmit,
      handleClear,
      submitting,
      resetFields,
      resetTable,
      modelsearch,
      componentKey
    };
  }
};
</script>
<template>
  <FormProvider
    style="form-material"
    :form="form"
    :errors="errors"
    :errorMsg="errorMsg"
    title=""
    @submit="handleSubmit()"
    class="form-group"
  >
    <div class="container">
      <div class="p-1 m-1">
        <h4 :for="form.email.$uid" class="label"><b>Email</b></h4>

        <BaseInput
          v-model="form.email.$value"
          :placeholder="loading ? 'Loading . . .' : 'ext@gmail.com'"
          :disabled="loading"
          :validating="loading"
          :has-error="form.email.$hasError"
          @blur="form.email.$onBlur()"
          :id="form.email.$uid"
        />
        <ValidationErrors :errors="form.email.$errors" />
      </div>
      <div class="p-1 m-1">
        <h4 :for="form.email.$uid" class="label"><b>Password</b></h4>

        <BaseInput
          v-model="form.password.$value"
          :placeholder="loading ? 'Loading . . .' : '***********'"
          :disabled="loading"
          :validating="loading"
          :has-error="form.password.$hasError"
          @blur="form.password.$onBlur()"
          :id="form.password.$uid"
          type="password"
        />
        <ValidationErrors :errors="form.password.$errors" />
      </div>

      <BaseButton
        class="btn-outline-primary m-1"
        type="primary"
        html-type="submit"
        :disabled="submitting"
      >
        Search
      </BaseButton>

      <BaseButton
        class="btn-outline-secondary m-1"
        type="primary"
        html-type="reset"
        :disabled="submitting"
        @click="handleClear()"
      >
        clear
      </BaseButton>
    </div>
  </FormProvider>

  <DataTable
    :key="componentKey"
    :modelsearch="modelsearch"
    :resetTable="resetTable"
  />
</template>

<style scoped>
table.dataTable thead .sorting {
  background-image: url("#");
}
table.dataTable thead .sorting_asc {
  background-image: url("#") !important;
}
table.dataTable thead .sorting_desc {
  background-image: url("#") !important;
}
table.dataTable thead .sorting_asc_disabled {
  background-image: url("#");
}
</style>

       
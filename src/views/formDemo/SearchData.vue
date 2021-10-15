 <script>
import { ref } from "vue";
import BaseInput from "@/components/form/BaseInput.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import ValidationErrors from "@/components/form/ValidationErrors.vue";
import FormProvider from "@/components/form/FormProvider";
import { required, email, sleep } from "/src/utils";
import { useValidation, ValidationError } from "vue3-form-validation";
import DataTable from "@/views/dashboard/DataTable.vue";
import TitleDetail from "@/components/form/TitleDetail.vue";
export default {
  name: "Login",
  components: {
    TitleDetail,
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
      loading.value = true;
      await sleep(1000);
      loading.value = false;
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
  <div class="card">
    <div class="card-body">
  <TitleDetail :titleName="'Search Form'" :titleDetail="''" />

  <nav class="nav float-end" style="margin-top: -6em">
    <a
      class="btn btn-dark btn-sm m-1"
      data-toggle="collapse"
      href="#searchForm"
      role="button"
      aria-expanded="false"
      aria-controls="searchForm"
      >ctrl-search</a
    >
    <a
      class="btn btn-dark btn-sm m-1"
      data-toggle="collapse"
      href="#historySearch"
      role="button"
      aria-expanded="false"
      aria-controls="historySearch"
      >history</a
    >
  </nav>

  <div class="collapse multi-collapse show" id="searchForm">
 
      
      <FormProvider
        style=""
        :form="form"
        :errors="errors"
        :errorMsg="errorMsg"
        title=""
        @submit="handleSubmit()"
        class="form-group"
      >
        <div class="form-row">
          <div class="form-group col-md-6">
            <b :for="form.email.$uid">Email</b>
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
          <div class="form-group col-md-6">
            <b :for="form.email.$password">Password</b>
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
          
        </div>

        <nav class="d-flex justify-content-center">
          <BaseButton
            class="nav-link btn btn-outline-primary m-1"
            type="primary"
            html-type="submit"
            :disabled="submitting"
          >
            Search
          </BaseButton>
          <BaseButton
            class="nav-link btn btn-outline-secondary m-1"
            type="primary"
            :disabled="submitting"
            @click="handleClear()"
          >
            clear
          </BaseButton>
        </nav>
      </FormProvider>

  </div>

    <div class="collapse multi-collapse" id="historySearch">
    <div class="card card-body">
      <b style="margin-top: -2.3em;"> history search</b>
      <div class="container-fluid">
        <span class="badge rounded-pill bg-light text-dark m-1 btn"
          >email: terapong@gmail.com, password: 1234</span
        >
        <span class="badge rounded-pill bg-light text-dark m-1 btn"
          >email: abcd@gmail.com, password: 67890</span
        >
      </div>
    </div>
  </div>
    <TitleDetail :titleName="'Response'" :titleDetail="''" class=" m-2" />
    <DataTable
      :key="componentKey"
      :modelsearch="modelsearch"
      :resetTable="resetTable"
    />
 </div>
  </div>
</template>

<style scoped>
</style>

       
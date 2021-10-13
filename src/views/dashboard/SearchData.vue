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
    let hideSearch = ref(false);
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
      hideSearch.value = true;
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
      hideSearch,
      componentKey
    };
  }
};
</script>
<template>
  <FormProvider
    style=""
    :form="form"
    :errors="errors"
    :errorMsg="errorMsg"
    title=""
    @submit="handleSubmit()"
    class="form-group"
  >
    <div class="container-fluid">
      <div class="row" style="margin-top: -4em; margin-right: -3em">
        <div class="col-11"></div>
        <div class="col-1 float-right">
          <b>show search</b>
          <label class="switch">
            <input type="checkbox" class="m-1" v-model="hideSearch" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      <div class="card" v-if="hideSearch">
        <div class="card-body">
          <nav class="nav float-right">
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

          <div class="row">
            <div class="form-group m-1">
              <div class="form-line">
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
            </div>

            <div class="form-group m-1">
              <div class="form-line">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </FormProvider>

  <DataTable
    :key="componentKey"
    :modelsearch="modelsearch"
    :resetTable="resetTable"
  />
</template>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

       
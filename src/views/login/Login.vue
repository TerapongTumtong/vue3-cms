<template>
  <div class="page parallel">
    <div class="d-flex row">
      <div class="col-md-3 white">
        <div class="p-5 mt-5">
          <img :src="imageLogo" />
        </div>
        <div class="p-5">
          <h3><b>Welcome Back</b></h3>
          <p>
            Hey Soldier welcome back signin now there is lot of new stuff
            waiting for you
          </p>
          <div class="animatedParent animateOnce">
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

                <div class="row m-1 d-flex p-1" v-if="errorMsg">
                  <div
                    class="
                      alert alert-danger
                      d-flex
                      align-items-center
                      text-center
                      col-12
                    "
                  >
                    {{ errorMsg }}
                  </div>
                </div>
                 <div class="row m-1 d-flex p-1" v-if="successMsg">
                  <div
                    class="
                      alert alert-success
                      d-flex
                      align-items-center
                      text-center
                      col-12
                    "
                  >
                    {{ successMsg }}
                  </div>
                </div>
                <SubmitButtons
                  class="buttons p-1 m-1"
                  gap="2rem"
                  @reset="resetFields()"
                  :submitting="submitting"
                />
              </div>
            </FormProvider>
          </div>
        </div>
      </div>
      <div
        class="
          col-md-9
          height-full
          bg-light.bg-gradient
          accent-3
          align-self-center
          text-center
        "
        data-bg-repeat="false"
        data-bg-possition="center"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import BaseInput from "@/components/form/BaseInput.vue";
import ValidationErrors from "@/components/form/ValidationErrors.vue";
import FormProvider from "@/components/form/FormProvider";
import SubmitButtons from "@/components/form/SubmitButtons.vue";
//import imageLogo from "@/assets/img/basic/logo.png";
import imageLogo from "@/assets/img/basic/logo.png";
import { required, email, sleep,max,min } from "/src/utils";
import { useValidation, ValidationError } from "vue3-form-validation";
import { mockLogin } from "@/services/UserService";
 import { useRouter } from "vue-router";

export default {
  name: "Login",
  components: {
    BaseInput,
    FormProvider,
    ValidationErrors,
    SubmitButtons
  },
  setup() {
    const loading = ref(false);
    let errorMsg = ref("");
    let successMsg= ref("");
     const router = useRouter();
    const {

     form,
     errors,
      submitting,
       validateFields,
        resetFields } =
      useValidation({
        email: {
          $value: "",
          $rules: [email(" * ระบุ email ให้ถูกต้อง ")]
        },
        password: {
          $value: "",
             $rules: [
               required(" * ระบุ password ให้ถูกต้อง "),
               min(8)(" * password ต้องมากกว่า 8 ตัวอักษร "),
               max(12)(" * password ต้องน้อยกว่า 12 ตัวอักษร "),
              ]
             
        }

      });

    (async function () {
      loading.value = true;
      await sleep(1000);
      loading.value = false;
    })();

    const handleSubmit = async () => {
      try {
       
        const formData = await validateFields();
        console.log(formData);
        //alert(JSON.stringify(formData, null, 2));
        mockLogin(formData.email);
          
        errorMsg.value = "ผิดพลาดไม่สามารถเข้าสู่ระบบได้โปรดตรวจสอบ";
        
        successMsg.value = "ยินดีต้อนรับ คุณ " + formData.email +" เข้าสู่ระบบ";

           setTimeout(async() => {
            await router.push("/");
             location.reload();
           }, 1000);

        
        //alert(errorMsg);
      } catch (e) {
        if (e instanceof ValidationError) {
          console.log(e.message);
        }
      }
    };

    return {
      form,
      errors,

      imageLogo,
      loading,
      handleSubmit,
      submitting,
      resetFields,
      errorMsg,
      successMsg
    };
  }
};
</script>
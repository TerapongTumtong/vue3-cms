<template>
                <div class="col">
                    <h1 class="s-24">
                       <b> {{titleName}} <span class="s-14">{{titleDetail}}</span></b>
                        
                    </h1>
                  
                </div>
</template>

<script>


export default {
  name: "TitleDetail",
 props: {
  
    titleName: {
      type: String,
      required: true
    },
   titleDetail: {
      type: String,
      required: true
    }
   
   
  }
}
</script>

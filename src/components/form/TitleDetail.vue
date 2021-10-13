<template>
                <div class="col">
                    <h1 class="s-24">
                        <i class="icon-pages"></i>
                        {{titleName}} <span class="s-14">{{titleDetail}}</span>
                        
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

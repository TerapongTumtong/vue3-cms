<template>
                
                    <h1>
                       <b> {{titleName}} <span>{{titleDetail}}</span></b>
                        
                    </h1>
                  
               
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

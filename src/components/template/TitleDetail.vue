<template>
 <header class="my-3">
        <div class="container-fluid">
          
            <div class="row">
                <div class="col">
                    <h1 class="s-24">
                        <i class="icon-pages"></i>
                        {{titleName}} <span class="s-14">{{titleDetail}}</span>
                    </h1>
                </div>
            </div>
            
        </div>
    </header>
    

  
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

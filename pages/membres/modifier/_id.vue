<template>
  
   <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
    <form-update-membre></form-update-membre>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateMembre from '@/components/membres/modifier/FormUpdateMembre';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormUpdateMembre
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-utilisateurs')){
        return redirect('/')
      }
    },
    data () {
      return {
        headerItems: [
        {
          text: 'Membres',
          disabled: false,
          to: '/membres',
          exact: true
        },
        {
          text: 'Detail membre',
          disabled: true,
          to: '/membres/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>

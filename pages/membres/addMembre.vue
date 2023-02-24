<template>

   <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
      <form-add-membre></form-add-membre>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormAddMembre from '@/components/membres/FormAddMembre';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormAddMembre
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
          text: 'membres',
          disabled: false,
          to: '/membres',
          exact: true
        },
        {
          text: 'Nouveau membre',
          disabled: false,
          to: '/membres/addMembre',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>

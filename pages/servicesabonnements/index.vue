<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-service-abonnement></list-service-abonnement>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListServiceAbonnement from '@/components/servicesabonnements/ListServiceAbonnement'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-parametres')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListServiceAbonnement
    },
    mounted: function() {
      this.$store.dispatch('servicesabonnements/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'servicesabonnements', icon: 'mdi-lock',link:'/servicesabonnements',position:2  }
        ],
        headerItems: [
          {
            text: 'Contenu',
            disabled: true,
            to: '/servicesabonnements',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>

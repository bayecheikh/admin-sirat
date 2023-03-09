<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-numero-utile></list-numero-utile>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListNumeroUtile from '@/components/numerosutiles/ListNumeroUtile'
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
      ListNumeroUtile
    },
    mounted: function() {
      this.$store.dispatch('numerosutiles/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'numerosutiles', icon: 'mdi-lock',link:'/numerosutiles',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des numéros utiles',
            disabled: true,
            to: '/numerosutiles',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>

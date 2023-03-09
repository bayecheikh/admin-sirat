<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-info-utile></list-info-utile>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListInfoUtile from '@/components/infosutiles/ListInfoUtile'
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
      ListInfoUtile
    },
    mounted: function() {
      this.$store.dispatch('infosutiles/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'infosutiles', icon: 'mdi-lock',link:'/infosutiles',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des informations utiles',
            disabled: true,
            to: '/infosutiles',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>

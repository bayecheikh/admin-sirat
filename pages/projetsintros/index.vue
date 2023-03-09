<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-projet-intro></list-projet-intro>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListProjetIntro from '@/components/projetsintros/ListProjetIntro'
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
      ListProjetIntro
    },
    mounted: function() {
      this.$store.dispatch('projetsintros/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'projet-intros', icon: 'mdi-lock',link:'/projetsintros',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des projets intros',
            disabled: true,
            to: '/projetsintros',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>

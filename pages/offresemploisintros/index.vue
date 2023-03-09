<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-offre-emploi-intro></list-offre-emploi-intro>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListOffreEmploiIntro from '@/components/offresemploisintros/ListOffreEmploiIntro'
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
      ListOffreEmploiIntro
    },
    mounted: function() {
      this.$store.dispatch('offresemploisintros/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'offresemploisintros', icon: 'mdi-lock',link:'/offresemploisintros',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des offres d\'emploi intro',
            disabled: true,
            to: '/offresemploisintros',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>

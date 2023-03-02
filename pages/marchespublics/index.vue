<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-marche-public></list-marche-public>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListMarchePublic from '@/components/marchespublics/ListMarchePublic'
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
      ListMarchePublic
    },
    mounted: function() {
      this.$store.dispatch('marchespublics/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'marchespublics', icon: 'mdi-lock',link:'/marchespublics',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des marchés publics',
            disabled: true,
            to: '/marchespublics',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>

<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-membre></list-membre>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListMembre from '@/components/membres/ListMembre'
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
      ListMembre
    },
    mounted: function() {
      this.$store.dispatch('membres/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'membres', icon: 'mdi-lock',link:'/membres',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des membres',
            disabled: true,
            to: '/membres',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>

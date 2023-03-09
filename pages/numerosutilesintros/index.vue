<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-numero-utile-intro></list-numero-utile-intro>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListNumeroUtileIntro from '@/components/numerosutilesintros/ListNumeroUtileIntro'
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
      ListNumeroUtileIntro
    },
    mounted: function() {
      this.$store.dispatch('numerosutilesintros/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'numerosutilesintros', icon: 'mdi-lock',link:'/numerosutilesintros',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des numéros utiles intro',
            disabled: true,
            to: '/numerosutilesintros',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>

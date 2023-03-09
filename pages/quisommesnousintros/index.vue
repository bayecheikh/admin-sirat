<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-qui-sommes-nous-intro></list-qui-sommes-nous-intro>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListQuiSommesNousIntro from '@/components/quisommesnousintros/ListQuiSommesNousIntro'
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
      ListQuiSommesNousIntro
    },
    mounted: function() {
      this.$store.dispatch('quisommesnousintros/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'quisommesnousintros', icon: 'mdi-lock',link:'/quisommesnousintros',position:2  }
        ],
        headerItems: [
          {
            text: 'Contenu',
            disabled: true,
            to: '/quisommesnousintros',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>

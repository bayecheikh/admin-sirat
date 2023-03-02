<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-qui-sommes-nous></list-qui-sommes-nous>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListQuiSommesNous from '@/components/quisommesnous/ListQuiSommesNous'
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
      ListQuiSommesNous
    },
    mounted: function() {
      this.$store.dispatch('quisommesnous/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'quisommesnous', icon: 'mdi-lock',link:'/quisommesnous',position:2  }
        ],
        headerItems: [
          {
            text: 'Contenu',
            disabled: true,
            to: '/quisommesnous',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>

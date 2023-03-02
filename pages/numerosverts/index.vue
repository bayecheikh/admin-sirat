<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-numero-vert></list-numero-vert>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListNumeroVert from '@/components/numerosverts/ListNumeroVert'
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
      ListNumeroVert
    },
    mounted: function() {
      this.$store.dispatch('numerosverts/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'numerosverts', icon: 'mdi-lock',link:'/numerosverts',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des numéros verts',
            disabled: true,
            to: '/numerosverts',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>

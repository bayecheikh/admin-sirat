<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-foire-aux-questions-intro></list-foire-aux-questions-intro>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListFoireAuxQuestionsIntro from '@/components/foireauxquestionsintros/ListFoireAuxQuestionsIntro'
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
      ListFoireAuxQuestionsIntro
    },
    mounted: function() {
      this.$store.dispatch('foireauxquestionsintros/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'foireauxquestionsintros', icon: 'mdi-lock',link:'/foireauxquestionsintros',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des questions intro',
            disabled: true,
            to: '/foireauxquestionsintros',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>

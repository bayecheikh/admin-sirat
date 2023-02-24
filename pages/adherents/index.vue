<template>
<div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-adherent></list-adherent>      
    </v-card>
  </div> 
</div>
  

  
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListAdherent from '@/components/adherents/ListAdherent'
import { mapActions} from 'vuex'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-utilisateurs')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListAdherent
    },
    mounted: function() {
      /* this.$store.dispatch('adherents/getList',1) */
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Ajouter un adherent', icon: 'mdi-account-plus-outline',link:'/adherents/addAdherent',position:0 },
          { text: 'Liste des adherents', icon: 'mdi-account-group-outline',link:'/adherents',position:1  },
          /* { text: 'Liste des roles', icon: 'mdi-lock',link:'/roles',position:1  }, */
          /* { text: 'Liste des permissions', icon: 'mdi-lock',link:'/permissions',position:1  } */
        ],
        headerItems: [
          {
            text: 'Liste des adherents',
            disabled: true,
            to: '/adherents',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>
.bg-title-grey {
  background-color: rgb(7, 127, 147) !important;
  color: #6F96AA;
}

.custom-container{
  padding-left: 3%;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 3%;
}
</style>

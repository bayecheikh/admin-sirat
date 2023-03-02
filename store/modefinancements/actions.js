export default {
    getList({commit}){
      this.$siratApi.$get('/ligne_mode_investissements')
      .then(async (response) => { 
        console.log('Données reçues+++++++++++',response)
            await commit('initlist', response.data)
          }).catch((error) => {
              console.log('Code error ++++++: ', error?.response?.data?.message)
              this.$toast.error(error?.response?.data?.message).goAway(3000)
          }).finally(() => {
            console.log('Requête envoyée ')
          });
    },
    async getDetail({commit},payload){
      console.log('Données détail reçues +++++++++++',payload)
      await commit('initdetail', payload)
    },
    async deletemodefinancement({commit,dispatch},payload){
      await commit('removeItem',payload) 
      
  }
}
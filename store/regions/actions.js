export default {
    getList({commit}){
        this.$siratApi.$get('regions')
        .then(async (response) => { 
        console.log('Données reçues+++++++++++',response)
            await commit('initlist', response.data)
            await commit('initSelectList', response.data)
            }).catch((error) => {
                console.log('Code error ++++++: ', error?.response?.data?.message)
            }).finally(() => {
            console.log('Requête envoyée ')
        });
    },

    async getDetail({commit},payload){
        /* this.$essApi.$get('/list-regions')
        .then(async (response) => { 
        console.log('Données reçues+++++++++++',response)
            await commit('initlist', response.regions)
            await commit('initSelectList', response.regions)
            }).catch((error) => {
                console.log('Code error ++++++: ', error?.response?.data?.message)
            }).finally(() => {
            console.log('Requête envoyée ')
        }); */
        console.log('Données détail reçues +++++++++++',payload)
        await commit('initdetail', payload)
    },
    async deleteregion({commit,dispatch},payload){
        await commit('removeItem',payload)    
    }
}
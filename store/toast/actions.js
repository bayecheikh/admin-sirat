export default {
    async getMessage({commit},payload){
        payload.text = "Contenu modifié avec succès"
        console.log('++++++++++++++++++++message ',payload)
        await commit('initmessage', payload)        
    }
}
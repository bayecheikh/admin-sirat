export default () => ({
    listfournisseurs: [],
    selectListFournisseurs: [],
    headerfournisseurs : [
        {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        },
        { text: 'Description', value: 'description' },
        /* { text: 'Statut', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailfournisseur :{}
})
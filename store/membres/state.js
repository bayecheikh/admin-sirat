export default () => ({
    listmembres: [],

    headermembres : [
        {
            text: 'Membre',
            align: 'start',
            sortable: true,
            value: 'libelle',
        },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailmembre :{}
})
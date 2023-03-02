export default () => ({
    listaxes: [],

    headeraxes : [
        {
            text: 'Libellé',
            align: 'start',
            sortable: true,
            value: 'nom_axe',
        },
        /* { text: 'Statut', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailaxe :{}
})
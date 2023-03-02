export default () => ({
    listpiliers: [],

    headerpiliers : [
        {
            text: 'Libellé',
            align: 'start',
            sortable: true,
            value: 'nom_pilier',
        },
        { text: 'Axes', value: 'axes',sortable: false },
        /* { text: 'Statut', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailpilier :{}
})
export default () => ({
    listemplois: [],

    headeremplois : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
        { text: 'Référence', value: 'reference' },
        { text: 'Secteur', value: 'secteur' },
        { text: 'Date de publication', value: 'date_publication' },
        { text: 'Date limite', value: 'date_limite' },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailemploi :{}
})
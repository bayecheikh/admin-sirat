export default () => ({
    listavisgeneraux: [],

    headeravisgeneraux : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
        { text: 'Référence', value: 'reference' },
        { text: 'Type de marché', value: 'type_marche' },
        { text: 'Date de publication', value: 'date_publication' },
        { text: 'Date limite', value: 'date_limite' },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailavisgeneraux :{}
})
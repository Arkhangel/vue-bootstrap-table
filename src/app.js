Vue.config.debug = true;
Vue.config.devtools = true;

import VueBootstrapTable from './VueBootstrapTable.vue';

new Vue({
    el: '#app',
    components: {
        VueBootstrapTable,
    },
    data: {
        logging: [],
        showFilter: true,
        showPicker: true,
        paginated: true,
        ajax: {
            enabled: false,
            url: "http://localhost:9430/data/test",
            method: "GET",
            delegate: true,
        },
        columns: [
            {
                title: "Id",
                name: "id",
            },
            {
                title: "Name",
                name: "title",
                visible: true,
                editable: true,
            }
        ],
        values: [
            {
                "id": 1,
                "title": "john",
            },
            {
                "id": 2,
                "title": "mary",
            },
            {
                "id": 3,
                "title": "jack",
            },
            {
                "id": 4,
                "title": "joe",
            },
            {
                "id": 5,
                "title": "ana",
            },
            {
                "id": 6,
                "title": "rita",
            },
            {
                "id": 7,
                "title": "mario",
            },
            {
                "id": 8,
                "title": "luigi",
            },
            {
                "id": 9,
                "title": "mickey",
            },
            {
                "id": 10,
                "title": "donald",
            },
            {
                "id": 11,
                "title": "juliet",
            }

        ]
    },
    ready: function () {
    },
    methods: {
        addItem: function () {
            var self = this;
            var item = {
                "id": this.values.length + 1,
                "name": "name " + (this.values.length + 1)
            };
            this.values.push(item);
        },
        toggleFilter: function () {
            this.showFilter = !this.showFilter;
        },
        togglePicker: function () {
            this.showPicker = !this.showPicker;
        },
        togglePagination: function () {
            this.paginated = !this.paginated;
        }
    },
    events: {
        cellDataModifiedEvent: function( originalValue, newValue, columnTitle, entry) {
            this.logging.push("Original Value : " + originalValue +
                         " | New Value : " + newValue +
                         " | Column : " + columnTitle +
                         " | Complete Entry : " +  entry );
        },
    },
});
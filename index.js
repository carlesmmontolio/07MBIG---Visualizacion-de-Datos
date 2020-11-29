// Import stylesheets
import './style.css';

var data = [
    ['eu', 4.84],
    ['oc', 0],
    ['af', 1.99],
    ['as', 0.69],
    ['na', 0.03],
    ['sa', 1.63]
];

Highcharts.mapChart('inmi', {
    chart: {
        map: 'custom/world-continents'
    },

    title: {
        text: 'Inmigración en Torrente'
    },

    subtitle: {
        text: 'por continentes'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    colorAxis: {
        min: 0
    },
    series: [{
        data: data,
        name: 'Porcentaje',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});
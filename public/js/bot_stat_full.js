$(document).ready(function () {
   
    Highcharts.setOptions({
        lang:{
            rangeSelectorZoom:''

        }
    });

    Highcharts.stockChart('container', {
        chart: {
            height: 500,
            width: 800
        },

        yAxis: {
            opposite: false,
            title: {text:'members'}
        },

        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%d-%m<br/>%Y',
                week: '%d-%m<br/>%Y',
                month: '%m-%Y',
                year: '%Y'
            }
        },

        rangeSelector: {
            selected: 0,
            buttonPosition:{
                x: 675
            },
            rangeSelectorZoom: {
                text :'String'},
                buttons: [{
                type: 'day',
                count: 3,
                text: 'day'
            }, {
                type: 'month',
                count: 1,
                text: 'month'
            },
            {
                type: 'all',
                text: 'all'
            }]
        },

        title: {
            text: 'Statistics channel'
        },

        scrollbar: {
            enabled: false
        },

        navigation: {
            buttonOptions: {
                enabled: false
            }
        },

        legend: {
            enabled: false
        },
        series: [{
            name: 'members',
            type: 'areaspline',  //areaspline
            threshold: null,
            tooltip: {
                valueDecimals: 1
            },

            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                    },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
            data: [
            [Date.UTC(2016,  0,  1), 35 ],
            [Date.UTC(2016,  0, 2), 45 ],
            [Date.UTC(2016,  0, 3), 65 ],
            [Date.UTC(2016,  0,  4), 85 ],
            [Date.UTC(2016,  0,  5), 78 ],
            [Date.UTC(2016,  0, 6), 98 ],
            [Date.UTC(2016,  0, 7), 102 ],
            [Date.UTC(2016,  0, 8), 98 ],
            [Date.UTC(2016,  0, 9), 98 ],
            [Date.UTC(2016,  0, 10), 54 ],
            [Date.UTC(2016,  0, 11), 68 ],
            [Date.UTC(2016,  0, 12), 45 ],
            [Date.UTC(2016,  0, 13), 89 ],
            [Date.UTC(2016,  0, 14), 75 ],
            [Date.UTC(2016,  0, 15), 68 ],
            [Date.UTC(2016,  0, 16), 75 ],
            [Date.UTC(2016,  0, 17), 98 ],
            [Date.UTC(2016,  0, 18), 95 ],
            [Date.UTC(2016,  0, 19), 55 ],
            [Date.UTC(2016,  0, 20), 88 ],
            [Date.UTC(2016,  0, 21), 55 ],
            [Date.UTC(2016,  0, 22), 69 ],
            [Date.UTC(2016,  0, 23), 75 ],
            [Date.UTC(2016,  0, 24), 58 ],
            [Date.UTC(2016,  0, 25), 75 ],
            [Date.UTC(2016,  0, 26), 55 ],
            [Date.UTC(2016,  0, 27), 88 ],
            [Date.UTC(2016,  0, 28), 55 ],
            [Date.UTC(2016,  0, 29), 69 ],
            [Date.UTC(2016,  0, 30), 75 ],
            [Date.UTC(2016,  0, 31), 58 ],
            [Date.UTC(2016,  1,  0), 22 ],
            [Date.UTC(2016,  1,  1), 35 ],
            [Date.UTC(2016,  1, 2), 45 ],
            [Date.UTC(2016,  1, 3), 65 ],
            [Date.UTC(2016,  1,  4), 85 ],
            [Date.UTC(2016,  1,  5), 78 ],
            [Date.UTC(2016,  1, 6), 98 ],
            [Date.UTC(2016,  1, 7), 102 ],
            [Date.UTC(2016,  1, 8), 98 ],
            [Date.UTC(2016,  1, 9), 98 ],
            [Date.UTC(2016,  1, 10), 54 ],
            [Date.UTC(2016,  1, 11), 68 ],
            [Date.UTC(2016,  1, 12), 45 ],
            [Date.UTC(2016,  1, 13), 89 ],
            [Date.UTC(2016,  1, 14), 75 ],
            [Date.UTC(2016,  1, 15), 68 ],
            [Date.UTC(2016,  1, 16), 75 ],
            [Date.UTC(2016,  1, 17), 98 ],
            [Date.UTC(2016,  1, 18), 95 ],
            [Date.UTC(2016,  1, 19), 55 ],
            [Date.UTC(2016,  1, 20), 88 ],
            [Date.UTC(2016,  1, 21), 55 ],
            [Date.UTC(2016,  1, 22), 69 ],
            [Date.UTC(2016,  1, 23), 75 ],
            [Date.UTC(2016,  1, 24), 58 ],
            [Date.UTC(2016,  1, 25), 75 ],
            [Date.UTC(2016,  1, 26), 55 ],
            [Date.UTC(2016,  1, 27), 88 ],
            [Date.UTC(2016,  1, 28), 55 ],
            [Date.UTC(2016,  2,  1), 35 ],
            [Date.UTC(2016,  2, 2), 45 ],
            [Date.UTC(2016,  2, 3), 65 ],
            [Date.UTC(2016,  2,  4), 85 ],
            [Date.UTC(2016,  2,  5), 78 ],
            [Date.UTC(2016,  2, 6), 98 ],
            [Date.UTC(2016,  2, 7), 102 ],
            [Date.UTC(2016,  2, 8), 98 ],
            [Date.UTC(2016,  2, 9), 98 ],
            [Date.UTC(2016,  2, 10), 54 ],
            [Date.UTC(2016,  2, 11), 68 ],
            [Date.UTC(2016,  2, 12), 45 ],
            [Date.UTC(2016,  2, 13), 89 ],
            [Date.UTC(2016,  2, 14), 75 ],
            [Date.UTC(2016,  2, 15), 68 ],
            [Date.UTC(2016,  2, 16), 75 ],
            [Date.UTC(2016,  2, 17), 98 ],
            [Date.UTC(2016,  2, 18), 95 ],
            [Date.UTC(2016,  2, 19), 55 ],
            [Date.UTC(2016,  2, 20), 88 ],
            [Date.UTC(2016,  2, 21), 55 ],
            [Date.UTC(2016,  2, 22), 69 ],
            [Date.UTC(2016,  2, 23), 75 ],
            [Date.UTC(2016,  2, 24), 58 ],
            [Date.UTC(2016,  2, 25), 75 ],
            [Date.UTC(2016,  2, 26), 55 ],
            [Date.UTC(2016,  2, 27), 88 ],
            [Date.UTC(2016,  2, 28), 55 ],
            [Date.UTC(2016,  2, 29), 69 ],
            [Date.UTC(2016,  2, 30), 75 ],
            [Date.UTC(2016,  2, 31), 58 ]

            ]
        }]
    });
});

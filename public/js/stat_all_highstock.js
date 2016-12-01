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
                    // second: '%Y-%m-%d<br/>%H:%M:%S',
                    // minute: '%Y-%m-%d<br/>%H:%M',
                    // hour: '%Y-%m-%d<br/>%H:%M',
                    // day: '%Y<br/>%m-%d',
                    week: '%Y<br/>%m-%d',
                    month: '%Y-%m',
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
     // plotOptions: {
     //            series: {
     //                cursor: 'pointer',
     //                events: {
     //                    click: function (event) {
     //                        alert(this.name + ' clicked\n' +
     //                              'Alt: ' + event.altKey + '\n' +
     //                              'Control: ' + event.ctrlKey + '\n' +
     //                              'Shift: ' + event.shiftKey + '\n');
     //                    }
     //                }
     //            }
     //        },
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
                // [1259625600000,28.14],
                // [1259712000000,28.03],
                // [1259798400000,28.07],
                // [1259884800000,27.62],
                // [1260144000000,26.99],
                // [1260230400000,27.12],
                // [1260316800000,28.26],
                // [1260403200000,28.06],
                // [1260489600000,27.81],
                // [1260748800000,28.14],
                // [1260835200000,27.74],
                // [1260921600000,27.86],
                // [1261008000000,27.41],
                // [1261094400000,27.92],
                // [1261353600000,28.32],
                // [1261440000000,28.62],
                // [1261526400000,28.87],
                // [1261612800000,29.86],
                // [1261958400000,30.23],
                // [1262044800000,29.87],
                // [1262131200000,30.23],
                // [1262217600000,30.10],
                // /* Jan 2010 */
                // [1262563200000,30.57],
                // [1262649600000,30.63],
                // [1262736000000,30.14],
                // [1262822400000,30.08],
                // [1262908800000,30.28],
                // [1263168000000,30.02],
                // [1263254400000,29.67],
                // [1263340800000,30.09],
                // [1263427200000,29.92],
                // [1263513600000,29.42],
                // [1263859200000,30.72],
                // [1263945600000,30.25],
                // [1264032000000,29.72],
                // [1264118400000,28.25],
                // [1264377600000,29.01],
                // [1264464000000,29.42],
                // [1264550400000,29.70],
                // [1264636800000,28.47],
                // [1264723200000,27.44]

                [Date.UTC(2016,  0,  0), 22 ],
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
                [Date.UTC(2016,  2, 31), 58 ],
            
                
                ]
            }]
        });
    });

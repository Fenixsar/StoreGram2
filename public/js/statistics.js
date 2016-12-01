$(document).ready(function() {
    chart1 = new Highcharts.Chart({
     chart: {
        renderTo: 'chart_1',
        type: 'spline',
        height: 400,
        width: 700
     },
     title: {
        text: 'Channel statistics "channel"'
     },
     xAxis: {
        // type: 'datetime',
        // dateTimeLabelFormats: {
        //         week: '%d.%m.%Y',
        //         month: '%m.%Y',
        //         year: '%Y'
        // },
        categories: ['15.11.2016', '16.11.2016', '17.11.2016', '18.11.2016', '19.11.2016', '20.11.2016', '21.11.2016', '22.11.2016', '23.11.2016', '24.11.2016']
     },
        series: [{            //объекты
        data: [5, 10, 20, 22, 25, 28, 30, 40, 80, 90]
}],
     // series: [{
     //         data: [
     //            [Date.UTC(2016,  0,  2), 22 ],
     //            [Date.UTC(2016,  1,  9), 35 ],
     //            [Date.UTC(2016,  2, 16), 45 ],
     //            [Date.UTC(2016,  3, 28), 65 ],
     //            [Date.UTC(2016,  4,  1), 85 ],
     //            [Date.UTC(2016,  5,  8), 78 ],
     //            [Date.UTC(2016,  6, 12), 98 ]

     //        ]
     //    }],

     yAxis: {
        title: {
           text: 'Members'
        },

     },
        legend: {
        enabled: false
        },
    tooltip: {
        enabled: false
    }
    });
});


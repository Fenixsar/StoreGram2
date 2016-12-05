$(document).ready(function() {

    container = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            height: 400,
            width: 700
        },

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
    },

    title: {
        text: 'Channel statistics'
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

    plotOptions: {
        series: {
            animation: false
        }
    },

    series: [{
        type: 'spline',
        data:[
            [Date.UTC(2016,  0,  1), 22 ],
            [Date.UTC(2016,  0,  2), 35 ],
            [Date.UTC(2016,  0, 3), 45 ],
            [Date.UTC(2016,  0, 4), 65 ],
            [Date.UTC(2016,  0,  5), 85 ],
            [Date.UTC(2016,  0,  6), 78 ],
            [Date.UTC(2016,  0, 7), 98 ],
            [Date.UTC(2016,  0, 8), 102 ],
            [Date.UTC(2016,  0, 9), 98 ],
            [Date.UTC(2016,  0, 10), 98 ],
            [Date.UTC(2016,  0, 11), 54 ],
            [Date.UTC(2016,  0, 12), 45 ],
            [Date.UTC(2016,  0, 13), 89 ],
            [Date.UTC(2016,  0, 14), 75 ],
            [Date.UTC(2016,  0, 15), 68 ],
            [Date.UTC(2016,  0, 16), 75 ],
            [Date.UTC(2016,  0, 17), 98 ],
            [Date.UTC(2016,  0, 18), 95 ],
            [Date.UTC(2016,  0, 19), 55 ],
            [Date.UTC(2016,  0, 20), 88 ],
            [Date.UTC(2016,  0, 21), 68 ]
            ]
        }]
    });
});

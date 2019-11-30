Highcharts.chart('container11', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Skill Based Sourcing 2019'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.y}%'
            }
        }
    },
    series: [{
        name: 'Skill',
        colorByPoint: true,
        data: [{
            name: 'java',
            y: 30,
            sliced: true,
            selected: true,
            events : {
                click : function() {
                    window.location.href= './skillBasedSourcing.html'
                    }
                }
            },
            {
            name: 'mean stack',
            y: 20,
            events : {
                click : function() {
                    window.location.href= './skillBasedSourcing.html'
                    }
                }
            }, 
            {
            name: 'data science',
            y: 10,
            events : {
                click : function() {
                    window.location.href= './skillBasedSourcing.html'
                    }
                }
            },
            {
            name: 'phython',
            y: 20,
            events : {
                click : function() {
                    window.location.href= './skillBasedSourcing.html'
                    }
                }
            },
            {
            name: 'dot net',
            y: 20,
            events : {
                click : function() {
                    window.location.href= './skillBasedSourcing.html'
                    }
                }
            }
        ]
    }]
});
requirejs.config({
    paths: {
        d3: 'node_modules/d3/d3'
    }
});

requirejs(['d3ndogram', 'd3'], function(d3ndogram, d3){

    var parsedData = generateTree()

    var margin = 10, gutter = 90, xAxis = 100, yAxis = 100

    //Make a selection to feed into the heatmap
    var elem = d3.select('div#tree')
        .append('svg').classed('heatmap', true)
        .attr({
            'width': 2 * margin + 2* gutter + xAxis,
            'height': 2 * margin + 2 * gutter + yAxis
        })
    
    //Set up the heatmap
    var d3ndo = d3ndogram()
        .selection(elem)
        .settings.labels(true)
        .settings.x({
            'margin': margin,
            'axis-width': xAxis,
            'gutter-width': gutter
        })
        .settings.y({
            'margin': margin,
            'axis-width': yAxis,
            'gutter-width': gutter
        })
        .settings.invert(false)
        .settings.interpolate(false)
    
    //Initialize the heatmap
    d3ndo()
    
    //Draw the heatmap with specified data
    d3ndo.draw({
        root: parsedData,
        lables: ['Node1', 'Node2', 'Node3', 'Node4'],
    })

    d3ndo.on('selected', function(s){
        console.log(s)
    })

    function generateTree(){
        return {
            distance: 0,
            children: [{
                distance: 0,
                children: [{
                    distance: 0,
                    name: "Node2"
                },{
                    distance: 0,
                    name: "Node1"
                }]
            },{
                distance: 0,
                children: [{
                    distance: 0,
                    children:[{
                        distance: 0,
                        name: "Node4"
                    },{
                        distance:0,
                        name: "Node5"
                    }]
                },{
                    distance: 0,
                    name: "Node3"
                }]

            }]
        }
    }


})

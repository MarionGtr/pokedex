import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class GraphicStat extends Component {
    render() {
        const { pokemon } = this.props; // Recupere le pokemon
        const dataPoints = pokemon?.stats?.map(stat => ({
            label: stat.stat.name,
            y: stat.base_stat
        })) || []; 

        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2",

            data: [{
                type: "pie",
                indexLabel: "{label}: {y}",
                startAngle: -90,
                dataPoints: dataPoints 
            }]
        };

        return (
            <div>
                <CanvasJSChart options={options}/>
            </div>
        );
    }
}

export default GraphicStat;
import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart, Radar } from 'react-chartjs-2'
import radarKpis from '@/data/kpi_radar.json'


const tailwindColors = [
    'rgba(239, 68, 68, 0.2)', // red-500 from Tailwind with 20% opacity for background
    'rgba(59, 130, 246, 0.2)', // blue-500
    'rgba(52, 211, 153, 0.2)', // green-500
    'rgba(251, 191, 36, 0.2)', // yellow-500
    'rgba(167, 139, 250, 0.2)' // purple-500
];

const tailwindBorderColors = [
    'rgb(239, 68, 68)', // red-500 from Tailwind
    'rgb(59, 130, 246)', // blue-500
    'rgb(52, 211, 153)', // green-500
    'rgb(251, 191, 36)', // yellow-500
    'rgb(167, 139, 250)' // purple-500
];

const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,  // Important!
    plugins: {

        legend: {
            display: true,
            position: 'bottom',
            align: 'center',
            labels: {
                boxWidth: 10,
                usePointStyle: true,
            }

        }
    }

};

function transformDataForChart(data) {


    let filteredData = data.filter(item => !["Aceptación pruebas", "Borrador", "Implantación"].includes(item.estado) &&
        item.quarter_inicio !== "2022-Q4"
    );

    const quarters = [...new Set(filteredData.map(item => item.quarter_inicio))];

    let labels = [...new Set(filteredData.map(item => item.estado))];
    let datasets = [];

    quarters.slice(0, 4).forEach((quarter, index) => {
        let valuesForEstado = {};

        labels.forEach(label => {
            const valueForQuarterAndEstado = filteredData.find(item => item.estado === label && item.quarter_inicio === quarter);
            valuesForEstado[label] = valueForQuarterAndEstado ? valueForQuarterAndEstado.value : 0;
        });

        let datasetValues = labels.map(label => valuesForEstado[label]);

        datasets.push({
            label: quarter,
            data: datasetValues,
            fill: true,
            backgroundColor: tailwindColors[index],
            borderColor: tailwindBorderColors[index],
            pointBackgroundColor: tailwindBorderColors[index],
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: tailwindBorderColors[index]
        });
    });

    return {
        labels: labels,
        datasets: datasets
    };
}


export function RadarChart () {

    const data = transformDataForChart(radarKpis);
    return (
        <div className="min-w-full w-8/12 grid grid-cols-1 items-center text-center">
            <p className="text-xl text-gray-600 font-semibold">Estado de las demanadas por trimestre</p>
            <Radar data={data} options={chartOptions} />
        </div>
    )
}


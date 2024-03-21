
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function BarGraph() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', "May", "Jun" , "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620, 498, 643, 331, 543, 763, 323, 645, 643],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                      ],
                      borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                      ],
                      borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
                
            },
            
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="w-full mb-4">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
        
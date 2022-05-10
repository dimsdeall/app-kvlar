import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function ChartDonut() {

     const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.9)',
              'rgba(54, 162, 235, 0.9)',
              'rgba(255, 206, 86, 0.9)',
              'rgba(75, 192, 192, 0.9)',
              'rgba(153, 102, 255, 0.9)',
              'rgba(255, 159, 64, 0.9)',
            ],
            borderColor: [
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.5)',
            ],
            borderWidth: 1,
          },
        ],
      };

  return (
    <div className='d-flex flex-column'>
        <div className='fw-bold align-self-center text-white'>Produk Terlaku</div>
        <Pie data={data}
            options={{
                plugins:{
                    legend:{
                        display:true,
                        title:{
                            text:'Produk Terlaku',
                            display:false,
                            color:'white',
                            
                        },
                        labels:{
                            textAlign:'left',
                            color: 'rgba(255, 255, 255, 1)',
                            boxHeight:12,
                        },
                        position:'bottom'
                    }
                },
                layout:{
                    padding:10
                }
            }}
        />
    </div>
  )
}

export default ChartDonut
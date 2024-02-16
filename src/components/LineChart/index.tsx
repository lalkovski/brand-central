import Chart, { CategoryScale } from 'chart.js/auto'
import { selectSelectedBrand } from 'data/Brand/selectors'
import { selectStocks } from 'data/Stock/selectors'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { getDataForChart, getSortedStockLabels } from './utils'

Chart.register(CategoryScale)

export const LineChart = () => {
  const stocks = useSelector(selectStocks)
  const selectedBrand = useSelector(selectSelectedBrand)

  const data = {
    labels: getSortedStockLabels(stocks),
    datasets: [
      {
        label: `${selectedBrand?.title} stock`,
        data: getDataForChart(stocks, selectedBrand),
        fill: false,
        borderColor: '#ac0000',
        tension: 0.1,
      },
    ],
  }

  return (
    <Line
      data={data}
      options={{
        plugins: {
          title: {
            display: true,
            text: `${selectedBrand?.title} stock between 2005 and 2024`,
          },
        },
      }}
    />
  )
}

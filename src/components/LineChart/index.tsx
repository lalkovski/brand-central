import Chart, { CategoryScale } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { useLineChartData } from './utils'

Chart.register(CategoryScale)

export const LineChart = () => {
  const { data, selectedBrand } = useLineChartData()

  return (
    <Line
      data={data}
      options={{
        plugins: {
          title: {
            display: true,
            text: `${selectedBrand?.name} stock between 2005 and 2024`,
          },
        },
      }}
    />
  )
}

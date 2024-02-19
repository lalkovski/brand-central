import { selectSelectedBrand } from 'data/Brand/selectors'
import { selectStocks } from 'data/Stock/selectors'
import { IBrand } from 'models/Brand'
import { IStock, TStockKeyTypes } from 'models/Stock'
import { useSelector } from 'react-redux'

/**
 * A function that returns data based on the selected brand
 * @param selectedBrand - the selected brand
 * @returns - string for data filtration
 */
export const getDataForChart = (stocks: { [key: string]: IStock }, selectedBrand?: IBrand) => {
  let objectKey: TStockKeyTypes = '1. open'

  switch (selectedBrand?.id) {
    case 1:
      objectKey = '1. open'
      break
    case 2:
      objectKey = '2. high'
      break
    case 3:
      objectKey = '5. volume'
      break
    case 4:
      objectKey = '4. close'
      break
    case 5:
      objectKey = '3. low'
      break
    default:
      objectKey = '1. open'
  }
  return Object.keys(stocks)
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
    .map((key: string) => stocks[key][objectKey])
}

export const getSortedStockLabels = (stocks: { [key: string]: IStock }) => {
  return Object.keys(stocks).sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
}

type TUseLineChartDataReturnType = {
  data: {
    labels: string[]
    datasets: {
      label: string
      data: string[]
      fill: boolean
      borderColor: string
      tension: number
    }[]
  }
  selectedBrand?: IBrand
}

/**
 * A custom hook that returns LineChart formatted data and the selectedBrand object
 * @returns formatted data for usage within the chart component and the selectedBrand object
 */
export const useLineChartData = (): TUseLineChartDataReturnType => {
  const stocks = useSelector(selectStocks)
  const selectedBrand = useSelector(selectSelectedBrand)

  const data = {
    labels: getSortedStockLabels(stocks),
    datasets: [
      {
        label: `${selectedBrand?.name} stock`,
        data: getDataForChart(stocks, selectedBrand),
        fill: false,
        borderColor: '#ac0000',
        tension: 0.1,
      },
    ],
  }

  return { data, selectedBrand }
}

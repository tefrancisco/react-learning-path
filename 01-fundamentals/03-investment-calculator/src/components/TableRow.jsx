import { formatter } from '../util/investment.js'

export default function TableRow({ year, interest, valueEndOfYear, totalInterest, investedCapital }) {
    return (
        <tr>
            <td>{year}</td>
            <td>{formatter.format(valueEndOfYear)}</td>
            <td>{formatter.format(interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(investedCapital)}</td>
          </tr>
    )
}
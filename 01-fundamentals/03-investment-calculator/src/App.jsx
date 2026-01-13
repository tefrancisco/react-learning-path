import { useState } from 'react'
import { calculateInvestmentResults, formatter } from './util/investment.js'
import Header from './components/Header.jsx'
import TableRow from './components/TableRow.jsx'
import Input from './components/Input.jsx'

function App() {
  // State que vai armazenar todos os parâmetros do investimento em um só objeto.
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: '',
  })

  // Array de previsões do investimento retornado pela função.
  let annualData = calculateInvestmentResults(investmentData)

  // Função que trata os dados dos inputs via two-way-binding e atualiza o objeto do state que armazena os dados do investimento.
  function handleUserInput(event, par) {
    setInvestmentData((prevData) => {
      const updatedData = { ...prevData }

      switch(par) {
        case 'initialInv':
          updatedData.initialInvestment = Number(event.target.value)
          break;
        case 'anualInv':
          updatedData.annualInvestment = Number(event.target.value)
          break;
        case 'expectedRet':
          updatedData.expectedReturn = Number(event.target.value)
          break;
        case 'duration':
          updatedData.duration = Number(event.target.value)
          break;
      }

      return updatedData;
    })
  }

  return (
    <>
      <Header>
        <img src="/investment-calculator-logo.png" alt="" />
        <h1>React Investment Calculator</h1>
      </Header>

      <section id="user-input">
        <div className="input-group">

          <Input label="Initial investment" value={investmentData.initialInvestment} onChangeFunction={() => handleUserInput(event, 'initialInv')} />

          <Input label="Annual investment" value={investmentData.annualInvestment} onChangeFunction={() => handleUserInput(event, 'anualInv')} />

          <Input label="Expected return" value={investmentData.expectedReturn} onChangeFunction={() => handleUserInput(event, 'expectedRet')} />

          <Input label="Duration" value={investmentData.duration} onChangeFunction={() => handleUserInput(event, 'duration')} />

        </div>
      </section>

      <table id="result">
        <thead>
          <tr>
            <td>Year</td>
            <td>Investment Value</td>
            <td>Interest (Year)</td>
            <td>Total Interest</td>
            <td>Invested Capital</td>
          </tr>
        </thead>
        <tbody>
          {/* Map do array que contém os objetos que representam os resultados do investimento de cada ano, criando um component para cada e passando as props
          ao desconstruir o objeto. */}
          {annualData.map((obj) => <TableRow key={obj.year} {...obj} />)}
        </tbody>
      </table>
    </>
  )
}

export default App

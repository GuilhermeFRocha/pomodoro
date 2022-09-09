import { useContext } from "react"
import { CyclesContext } from "../../contexts/CycleContexts"
import { HistoryContainer, HistoryList, Status } from "./style"

export const History = () => {
  const {cycles} = useContext(CyclesContext)
  return (
    <HistoryContainer>
        <h1>History</h1>

        <HistoryList>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duraçao</th>
                <th>Inicio</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Tarefa 1</td>
                <td>1:00</td>
                <td>10/10/2020</td>
                <td><Status statusColor="green">Concluido</Status></td>
              </tr>

              <tr>
                <td>Tarefa 1</td>
                <td>1:00</td>
                <td>10/10/2020</td>
                <td><Status statusColor="green" >Concluido</Status></td>
              </tr>

              <tr>
                <td>Tarefa 1</td>
                <td>1:00</td>
                <td>10/10/2020</td>
                <td><Status statusColor="green">Concluido</Status></td>
              </tr>

              <tr>
                <td>Tarefa 1</td>
                <td>1:00</td>
                <td>10/10/2020</td>
                <td><Status statusColor="green">Concluido</Status></td>
              </tr>

              <tr>
                <td>Tarefa 1</td>
                <td>1:00</td>
                <td>10/10/2020</td>
                <td><Status statusColor="green">Concluido</Status></td>
              </tr>

              <tr>
                <td>Tarefa 1</td>
                <td>1:00</td>
                <td>10/10/2020</td>
                <td><Status statusColor="green">Concluido</Status></td>
              </tr>
            </tbody>
          </table>
        </HistoryList>
    </HistoryContainer>
  )
}


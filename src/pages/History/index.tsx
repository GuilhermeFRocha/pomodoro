import { useContext } from "react";
import { formatDistanceToNow } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";
import { CyclesContext } from "../../contexts/CycleContexts";
import { HistoryContainer, HistoryList, Status } from "./style";

export const History = () => {
  const { cycles } = useContext(CyclesContext);
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
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>{formatDistanceToNow(cycle.startDate, {
                     addSuffix:true,
                     locale: ptBR,          
                  })}</td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluido</Status>
                    )}
                    {cycle.interruptDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!cycle.interruptDate && !cycle.interruptDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
};

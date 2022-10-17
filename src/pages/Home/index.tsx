import { Play } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";
import { FormProvider, useForm } from "react-hook-form";
import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from "./styles";
import { useContext } from "react";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/CowntDown";
import { CyclesContext } from "../../contexts/CycleContexts";

interface NewCycleFormData {
  task: string;
  minutesAmount: number;
}

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa"),
    minutesAmount: zod.number().min(5).max(60),
  });

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountDownButton onClick={interruptCurrentCycle} type="button">
            <Play size={24} />
            Interromper
          </StopCountDownButton>
        ) : (
          <StartCountDownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  );
}
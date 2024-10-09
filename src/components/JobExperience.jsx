import {
  FormComplete,
  FormCompleteDiv,
  FormTopHeding,
  FormInfoInput,
  FormSubHeading,
  FormLabel,
  FormBtn,
} from './styles/FormStyling';
import { format, parseISO } from 'date-fns';

export default function JobEx({
  workEx,
  onChangeCompany,
  onChangeTitle,
  onChangeStartDate,
  onChangeEndDate,
  onChangeWorkDone,
  onChangeState,
  onChangeCity,
  onAddJobDone,
  onRemoveJobDone,
  id,
}) {
  console.log('experience', workEx);
  function UniSt1(date1, id) {
    let newFomatedStartDate = format(parseISO(date1), 'MMM yyyy');
    onChangeStartDate(newFomatedStartDate, id);
  }
  function UniEd1(date2, id) {
    let newFomatedStartDate = format(parseISO(date2), 'MMM yyyy');
    onChangeEndDate(newFomatedStartDate, id);
  }
  function jobDoneRender() {
    let jobDoneList = [];
    for (let i = 0; i < workEx.jobDoneCounter; i++) {
      jobDoneList.push(
        <FormInfoInput
          id={'jobDone' + i}
          key={i + 1}
          name={'jobDone' + i}
          value={workEx.jobDone[i]}
          onChange={(e) => onChangeWorkDone(e.target.value, id, i)}
        />,
      );
    }
    return jobDoneList.length < 1 ? null : jobDoneList;
  }

  function onAddingA(e) {
    e.preventDefault();
    onAddJobDone(id);
  }

  function onRemovingB(e) {
    e.preventDefault();
    onRemoveJobDone(id);
  }

  return (
    <FormCompleteDiv>
      {id === 1 && <FormTopHeding>Job Experience</FormTopHeding>}
      <FormSubHeading>Job {id}</FormSubHeading>
      <FormComplete>
        <FormInfoInput
          onChange={(e) => onChangeCompany(e.target.value, id)}
          type="text"
          id={'companyName' + id}
          name={'companyName' + id}
          placeholder="Company Name"
          value={workEx.companyName}
        ></FormInfoInput>
        <FormInfoInput
          type="text"
          id={'jobTitle' + id}
          name={'jobTitle' + id}
          value={workEx.jobTitle}
          placeholder="Job Title"
          onChange={(e) => onChangeTitle(e.target.value, id)}
        ></FormInfoInput>
        <FormInfoInput
          type="text"
          id={'state' + id}
          name={'state' + id}
          placeholder="State"
          value={workEx.state}
          onChange={(e) => onChangeState(e.target.value, id)}
        ></FormInfoInput>
        <FormInfoInput
          type="text"
          id={'city' + id}
          name={'city' + id}
          value={workEx.city}
          placeholder="City"
          onChange={(e) => onChangeCity(e.target.value, id)}
        ></FormInfoInput>
        {jobDoneRender()}
        {workEx.jobDoneCounter <= 4 && (
          <FormBtn BgColor="green" Color="white" onClick={(e) => onAddingA(e)}>
            Add Acheivements
          </FormBtn>
        )}
        {workEx.jobDoneCounter > 0 && (
          <FormBtn BgColor="grey" Color="white" onClick={(e) => onRemovingB(e)}>
            Remove Acheivements
          </FormBtn>
        )}
        <FormLabel>From</FormLabel>
        <FormInfoInput
          type="date"
          id={'startDate' + id}
          name={'startDate' + id}
          onChange={(e) => UniSt1(e.target.value, id)}
        ></FormInfoInput>
        <FormLabel>To</FormLabel>
        <FormInfoInput
          type="date"
          id={'endDate' + id}
          name={'endDate' + id}
          onChange={(e) => UniEd1(e.target.value, id)}
        ></FormInfoInput>
      </FormComplete>
    </FormCompleteDiv>
  );
}

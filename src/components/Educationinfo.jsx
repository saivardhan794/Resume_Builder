import { format, parseISO } from 'date-fns';
import {
  FormComplete,
  FormCompleteDiv,
  FormTopHeding,
  FormInfoInput,
  FormSubHeading,
  FormLabel,
} from './styles/FormStyling';

export default function EducationInfo({
  educationInfo,
  onChangeUniversityName,
  onChangeStartDate,
  onChangeEndDate,
  onChangeDegree,
  onChangeState,
  onChangeCity,
  id,
  onChangeGpa,
}) {
  console.log(educationInfo);
  function UniSt1(date1, id) {
    let newFomatedStartDate = format(parseISO(date1), 'MMM yyyy');
    onChangeStartDate(newFomatedStartDate, id);
  }
  function UniEd1(date2, id) {
    let newFomatedStartDate = format(parseISO(date2), 'MMM yyyy');
    onChangeEndDate(newFomatedStartDate, id);
  }
  return (
    <FormCompleteDiv>
      {id === 1 && <FormTopHeding>Education Information</FormTopHeding>}
      <FormSubHeading>Education {id}</FormSubHeading>
      <FormComplete>
        <FormInfoInput
          onChange={(e) => onChangeUniversityName(e.target.value, id)}
          type="text"
          name={'university' + id}
          id={'university' + id}
          placeholder="University Name"
          value={educationInfo.universityName}
        ></FormInfoInput>
        <FormInfoInput
          onChange={(e) => onChangeDegree(e.target.value, id)}
          placeholder="Degree"
          type="text"
          name={'degree' + id}
          id={'degree' + id}
          value={educationInfo.degree}
        ></FormInfoInput>
        <FormInfoInput
          onChange={(e) => onChangeCity(e.target.value, id)}
          type="text"
          name={'city' + id}
          id={'city' + id}
          placeholder="City"
          value={educationInfo.city}
        ></FormInfoInput>
        <FormInfoInput
          onChange={(e) => onChangeState(e.target.value, id)}
          type="text"
          name={'state' + id}
          id={'state' + id}
          value={educationInfo.state}
          placeholder="State"
        ></FormInfoInput>
        <FormInfoInput
          onChange={(e) => onChangeGpa(e.target.value, id)}
          type="text"
          name={'gpa' + id}
          id={'gpa' + id}
          placeholder="GPA"
          value={educationInfo.gpa}
        ></FormInfoInput>
        <FormLabel>Start Date</FormLabel>
        <FormInfoInput
          onChange={(e) => UniSt1(e.target.value, id)}
          type="date"
          name={'startdate' + id}
          id={'startdate' + id}
        ></FormInfoInput>
        <FormLabel>End Date</FormLabel>
        <FormInfoInput
          onChange={(e) => UniEd1(e.target.value, id)}
          type="date"
          name={'enddate' + id}
          id={'enddate' + id}
        ></FormInfoInput>
      </FormComplete>
    </FormCompleteDiv>
  );
}

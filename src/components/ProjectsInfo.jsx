import {
  FormComplete,
  FormCompleteDiv,
  FormTopHeding,
  FormInfoInput,
  FormSubHeading,
  FormInfoTextArea,
} from './styles/FormStyling';

export default function ProjectInfo({
  ProjectInfo,
  onChangeProjectName,
  onChangeTechnologies,
  onChangeProjectSummary,
  index,
}) {
  return (
    <FormCompleteDiv>
      {index === 1 && <FormTopHeding>Projects</FormTopHeding>}
      <FormSubHeading>Project {index}</FormSubHeading>
      <FormComplete>
        <FormInfoInput
          type="text"
          name={'projectName' + index}
          id={'projectName' + index}
          placeholder="Project Name"
          value={ProjectInfo.projectName}
          onChange={(e) => onChangeProjectName(e.target.value, index)}
        ></FormInfoInput>
        <FormInfoInput
          type="text"
          name={'technologies' + index}
          id={'technologies' + index}
          placeholder="Enter multiple technologies seperated by comma"
          value={ProjectInfo.projectTechnologies}
          onChange={(e) => onChangeTechnologies(e.target.value, index)}
        ></FormInfoInput>
        <FormInfoTextArea
          type="text"
          name={'projectSummary' + index}
          id={'projectSummary' + index}
          rows="3"
          cols="25"
          value={ProjectInfo.projectSummary}
          placeholder="Project Summary"
          onChange={(e) => onChangeProjectSummary(e.target.value, index)}
        ></FormInfoTextArea>
      </FormComplete>
    </FormCompleteDiv>
  );
}

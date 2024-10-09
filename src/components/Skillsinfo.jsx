import styled from 'styled-components';

import {
  FormComplete,
  FormCompleteDiv,
  FormTopHeding,
  FormInfoInput,
} from './styles/FormStyling';

export default function Skills({ skillsInfo, onChangeSkills, id }) {
  console.log(id, skillsInfo);
  return (
    <FormCompleteDiv>
      {id === 0 && <FormTopHeding>Skills</FormTopHeding>}
      <FormComplete>
        <FormInfoInput
          onChange={(e) => onChangeSkills(e.target.value, id)}
          placeholder={'Enter Skill'}
          id={'skillName' + id}
          name={'skillName' + id}
          value={skillsInfo}
        />
      </FormComplete>
    </FormCompleteDiv>
  );
}

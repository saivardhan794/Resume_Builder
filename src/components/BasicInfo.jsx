import {
  FormBtn,
  FormComplete,
  FormCompleteDiv,
  FormTopHeding,
  FormInfoInput,
} from './styles/FormStyling';

export default function BasicInfo({
  basicInfo,
  onChangeName,
  onChangeEmail,
  onChangePhoneno,
  resetBasicInfo,
}) {
  return (
    <FormCompleteDiv>
      <FormTopHeding>Basic Information</FormTopHeding>
      <FormComplete>
        <FormInfoInput
          onChange={(e) => onChangeName(e.target.value)}
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          value={basicInfo.name}
          required
        />
        <FormInfoInput
          onChange={(e) => onChangePhoneno(e.target.value)}
          type="text"
          placeholder="Phone No"
          name="phoneno"
          id="phoneno"
          value={basicInfo.phoneno}
          required
        />
        <FormInfoInput
          onChange={(e) => onChangeEmail(e.target.value)}
          type="email"
          placeholder="Email Id"
          name="email"
          id="email"
          value={basicInfo.email}
          required
        />
      </FormComplete>
      <FormBtn onClick={resetBasicInfo} Color="white" BgColor="grey">
        Reset
      </FormBtn>
    </FormCompleteDiv>
  );
}

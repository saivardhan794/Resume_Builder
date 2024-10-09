import styled from 'styled-components';

const CompleteResumeDiv = styled.div`
  font-family: 'Times New Roman', Times, serif;
  width: 95%;
  background-color: white;
  box-shadow: 0 3px 10px lightgray;
  padding: 2.5% 2.5%;
  margin-top: 2.5%;
  display: flex;
  flex-direction: column;
`;

const HeadingDiv = styled.div`
  width: 100%;
  min-height: 5%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 10px;
`;

const CompleteNameDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  white-space: nowrap;
`;

const FontSpan = styled.span`
  font-family: Calibri, Helvetica, sans-serif;
`;

const FullName = styled(FontSpan)`
  font-size: 1.2rem;
  font-weight: 600;
`;

const ContactInfoDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const RegularTextSpan = styled(FontSpan)`
  font-size: ${(props) => props.FontSize}rem;
`;

const EducationDiv = styled.div`
  margin-bottom: 1rem;
`;

const CapitalSubHeadingDiv = styled.div``;

const CapitalSubHeadingText = styled(FontSpan)`
  font-size: 1.2rem;
  font-weight: 400;
`;

const HorizontalRule = styled.hr`
  margin-top: 2px;
`;

const MainSubPointerDiv = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const MainCircleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2%;
  flex-grow: 0;
`;

const CircleSpan = styled.span`
  height: 0.4rem;
  width: 0.4rem;
  border: 0.05rem solid black;
  background-color: ${(props) => props.BgColor};
  border-radius: 50%;
`;

const MainSubpointDivBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 78%;
  height: 100%;
`;

const MainSubpointText = styled(FontSpan)`
  font-size: ${(props) => props.FontSize}rem;
  font-weight: ${(props) => props.FontWeight};
  font-style: ${(props) => props.FontStyle};
  white-space: nowrap;
`;

const MainSubpointTail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const MainExperienceDiv = styled.div``;

const SubSubpointTotalDiv = styled.div`
  margin-left: 2rem;
  margin-bottom: 1rem;
`;

const SubSubpointDiv = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SubSubpointCircle = styled.div`
  display: flex;
  align-items: center;
`;

const ProjectPointsDiv = styled.div``;

const SkillsCompleteDiv = styled.div``;

const SkillsListBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SkillEach = styled.div`
  width: 50%;
  display: flex;
  gap: 0.8rem;
`;

export default function RenderResume({
  basicInfo,
  educationInfo,
  education2Flag,
  experience,
  experienceFlag,
  projects,
  projectCounter,
  skillsList,
  skillsCounter,
}) {
  let educationInfoFilled =
    false ||
    (educationInfo[0].universityName &&
      educationInfo[0].universityName.length != 0) ||
    (educationInfo[0].startDate && educationInfo[0].startDate.length != 0) ||
    (educationInfo[0].endDate && educationInfo[0].endDate.length != 0) ||
    (educationInfo[0].degree && educationInfo[0].degree.length != 0) ||
    (educationInfo[0].city && educationInfo[0].city.length != 0) ||
    (educationInfo[0].state && educationInfo[0].state.length != 0) ||
    (educationInfo[0].gpa && educationInfo[0].gpa.length != 0);

  let educationInfoFilled2 =
    education2Flag &&
    ((educationInfo[1].universityName &&
      educationInfo[1].universityName.length != 0) ||
      (educationInfo[1].startDate && educationInfo[1].startDate.length != 0) ||
      (educationInfo[1].endDate && educationInfo[1].endDate.length != 0) ||
      (educationInfo[1].degree && educationInfo[1].degree.length != 0) ||
      (educationInfo[1].city && educationInfo[1].city.length != 0) ||
      (educationInfo[1].state && educationInfo[1].state.length != 0) ||
      (educationInfo[1].gpa && educationInfo[1].gpa.length != 0));

  let experienceInfoFilled =
    false ||
    (experience[0].companyName && experience[0].companyName.length != 0) ||
    (experience[0].jobTitle && experience[0].jobTitle.length != 0) ||
    (experience[0].city && experience[0].city.length != 0) ||
    (experience[0].state && experience[0].state != 0) ||
    (experience[0].fromDate && experience[0].fromDate.length != 0) ||
    (experience[0].toDate && experience[0].toDate.length != 0);

  let experienceInfoFilled2 =
    experienceFlag &&
    ((experience[1].companyName && experience[1].companyName.length != 0) ||
      (experience[1].jobTitle && experience[1].jobTitle.length != 0) ||
      (experience[1].city && experience[1].city.length != 0) ||
      (experience[1].state && experience[1].state != 0) ||
      (experience[1].fromDate && experience[1].fromDate.length != 0) ||
      (experience[1].toDate && experience[1].toDate.length != 0));

  let projectInfo1 =
    (projects[0].projectName && projects[0].projectName.length != 0) ||
    (projects[0].projectTechnologies &&
      projects[0].projectTechnologies.length != 0) ||
    (projects[0].projectSummary && projects[0].projectSummary.length != 0);

  let projectInfo2 =
    (projects[1].projectName && projects[1].projectName.length != 0) ||
    (projects[1].projectTechnologies &&
      projects[1].projectTechnologies.length != 0) ||
    (projects[1].projectSummary && projects[1].projectSummary.length != 0);

  let projectInfo3 =
    (projects[2].projectName && projects[2].projectName.length != 0) ||
    (projects[2].projectTechnologies &&
      projects[2].projectTechnologies.length != 0) ||
    (projects[2].projectSummary && projects[2].projectSummary.length != 0);

  function SubPointsCreation(id) {
    let exSubPoints = [];
    for (let i = 0; i < experience[id - 1].jobDone.length; i++) {
      if (experience[id - 1].jobDone[i] != '') {
        exSubPoints.push(
          <SubSubpointDiv key={id + i + 'yes'}>
            <SubSubpointCircle>
              <CircleSpan BgColor="white" />
            </SubSubpointCircle>
            <RegularTextSpan FontSize="1" FontWeight="500" FontStyle="normal">
              {experience[id - 1].jobDone[i]}
            </RegularTextSpan>
          </SubSubpointDiv>,
        );
      }
    }
    experience[id - 1].jobDone.forEach((jobPoint) => {
      if (jobPoint != '') {
      }
    });

    if (exSubPoints.length === 0) {
      return null;
    }
    return exSubPoints;
  }
  function checkEduHeader() {
    let isEduHeader = document.querySelector('#educationSubheading');
    if (!(educationInfoFilled || educationInfoFilled2)) return false;
    if (isEduHeader) return true;
    if ((educationInfoFilled || educationInfoFilled2) && isEduHeader === null) {
      return true;
    }
    return false;
  }
  function checkExperienceHeader() {
    let isExHeader = document.querySelector('#experienceSubHeading');
    if (!(experienceInfoFilled || experienceInfoFilled2)) return false;
    if (isExHeader) return true;
    if (
      (experienceInfoFilled || experienceInfoFilled2) &&
      isExHeader === null
    ) {
      return true;
    }
    return false;
  }

  function checkProjectHeader() {
    let isProHeader = document.querySelector('#projectSubHeading');
    if (!(projectInfo1 || projectInfo2 || projectInfo3)) return false;
    if (isProHeader) return true;
    if (
      (projectInfo1 || projectInfo2 || projectInfo3) &&
      isProHeader === null
    ) {
      return true;
    }
    return false;
  }

  function checkSkillsHeader() {
    let isSkillsHeader = document.querySelector('#skillsSubHeading');
    if (
      !(
        skillsList[0] ||
        skillsList[1] ||
        skillsList[2] ||
        skillsList[3] ||
        skillsList[4]
      )
    )
      return false;
    if (isSkillsHeader) return true;
    if (
      (skillsList[0] ||
        skillsList[1] ||
        skillsList[2] ||
        skillsList[3] ||
        skillsList[4]) &&
      isSkillsHeader === null
    ) {
      return true;
    }
    return false;
  }

  function loadProjectById(id) {
    return (
      <>
        <MainSubPointerDiv>
          <MainCircleDiv>
            <CircleSpan BgColor="black" />
          </MainCircleDiv>
          <MainSubpointText FontSize="1" FontWeight="700" FontStyle="normal">
            {projects[id - 1].projectName}
            {projects[id - 1].projectTechnologies && ' :'}
          </MainSubpointText>
          <MainSubpointText FontSize="1" FontWeight="500" FontStyle="normal">
            {projects[id - 1].projectTechnologies}
          </MainSubpointText>
        </MainSubPointerDiv>
        {projects[id - 1].projectSummary && (
          <SubSubpointTotalDiv>
            <SubSubpointDiv>
              <SubSubpointCircle>
                <CircleSpan BgColor="white" />
              </SubSubpointCircle>
              <RegularTextSpan
                FontSize="0.8"
                FontWeight="500"
                FontStyle="normal"
              >
                {projects[id - 1].projectSummary}
              </RegularTextSpan>
            </SubSubpointDiv>
          </SubSubpointTotalDiv>
        )}
      </>
    );
  }

  function educationInfoFill(id) {
    return (
      <>
        <MainSubPointerDiv>
          <MainCircleDiv>
            <CircleSpan BgColor="black" />
          </MainCircleDiv>
          <MainSubpointDivBody>
            <MainSubpointText FontSize="1" FontWeight="700" FontStyle="normal">
              {educationInfo[id - 1].universityName}
            </MainSubpointText>
            <MainSubpointText FontSize="1" FontWeight="500" FontStyle="italic">
              {educationInfo[id - 1].degree}{' '}
              {educationInfo[id - 1].gpa && '; GPA:'}{' '}
              {educationInfo[id - 1].gpa}
            </MainSubpointText>
          </MainSubpointDivBody>
          <MainSubpointTail>
            <MainSubpointText FontSize="1" FontWeight="500" FontStyle="normal">
              {educationInfo[id - 1].city}
              {educationInfo[id - 1].state && ','}
              {educationInfo[id - 1].state}
            </MainSubpointText>
            <MainSubpointText
              FontSize="0.9"
              FontWeight="500"
              FontStyle="italic"
            >
              {educationInfo[id - 1].startDate}{' '}
              {educationInfo[id - 1].endDate && '-'}{' '}
              {educationInfo[id - 1].endDate}
            </MainSubpointText>
          </MainSubpointTail>
        </MainSubPointerDiv>
      </>
    );
  }
  function experienceInfoFill(id) {
    return (
      <>
        <MainSubPointerDiv>
          <MainCircleDiv>
            <CircleSpan BgColor="black" />
          </MainCircleDiv>
          <MainSubpointDivBody>
            <MainSubpointText FontSize="1" FontWeight="700" FontStyle="normal">
              {experience[id - 1].companyName}
            </MainSubpointText>
            <MainSubpointText FontSize="1" FontWeight="500" FontStyle="italic">
              {experience[id - 1].jobTitle}
            </MainSubpointText>
          </MainSubpointDivBody>
          <MainSubpointTail>
            <MainSubpointText FontSize="1" FontWeight="500" FontStyle="normal">
              {experience[id - 1].city}
              {experience[id - 1].state && ','}
              {experience[id - 1].state}
            </MainSubpointText>
            <MainSubpointText
              FontSize="0.9"
              FontWeight="500"
              FontStyle="italic"
            >
              {experience[id - 1].fromDate}
              {experience[id - 1].toDate && ' - '}
              {experience[id - 1].toDate}
            </MainSubpointText>
          </MainSubpointTail>
        </MainSubPointerDiv>
        <SubSubpointTotalDiv>{SubPointsCreation(id)}</SubSubpointTotalDiv>
      </>
    );
  }

  function loadSkillsList() {
    let renderSkillsList = [];
    for (let i = 0; i < skillsList.length; i++) {
      if (skillsList[i] != '') {
        renderSkillsList.push(
          <SkillEach>
            <SubSubpointCircle>
              <CircleSpan BgColor="white" />
            </SubSubpointCircle>
            <MainSubpointText>{skillsList[i]}</MainSubpointText>
          </SkillEach>,
        );
      }
    }
    return renderSkillsList.length != 0 ? renderSkillsList : null;
  }

  return (
    <CompleteResumeDiv id="resumeDownload">
      <HeadingDiv>
        {basicInfo.name.length > 0 && (
          <CompleteNameDiv>
            <FullName>{basicInfo.name}</FullName>
          </CompleteNameDiv>
        )}
        <ContactInfoDiv>
          {basicInfo.email.length > 0 && (
            <MainSubpointText
              FontSize="0.9"
              FontWeight="500"
              FontStyle="regular"
            >
              {basicInfo.email}
            </MainSubpointText>
          )}
          {basicInfo.phoneno.length > 0 && (
            <MainSubpointText
              FontSize="0.9"
              FontWeight="500"
              FontStyle="regular"
            >
              {basicInfo.phoneno}
            </MainSubpointText>
          )}
        </ContactInfoDiv>
      </HeadingDiv>
      <EducationDiv>
        {checkEduHeader() && (
          <CapitalSubHeadingDiv id="educationSubheading">
            <CapitalSubHeadingText>Education</CapitalSubHeadingText>
            <HorizontalRule />
          </CapitalSubHeadingDiv>
        )}
        {educationInfoFilled && educationInfoFill(1)}
        {educationInfoFilled2 && educationInfoFill(2)}
      </EducationDiv>
      <MainExperienceDiv>
        {checkExperienceHeader() && (
          <CapitalSubHeadingDiv id="experienceSubHeading">
            <CapitalSubHeadingText>Experience</CapitalSubHeadingText>
            <HorizontalRule />
          </CapitalSubHeadingDiv>
        )}
        {experienceInfoFilled && experienceInfoFill(1)}
        {experienceInfoFilled2 && experienceInfoFill(2)}
      </MainExperienceDiv>
      <ProjectPointsDiv>
        {checkProjectHeader() && (
          <CapitalSubHeadingDiv id="projectSubHeading">
            <CapitalSubHeadingText>Projects</CapitalSubHeadingText>
            <HorizontalRule />
          </CapitalSubHeadingDiv>
        )}
        {projectInfo1 && loadProjectById(1)}
        {projectInfo2 && loadProjectById(2)}
        {projectInfo3 && loadProjectById(3)}
      </ProjectPointsDiv>
      <SkillsCompleteDiv>
        {checkSkillsHeader() && (
          <CapitalSubHeadingDiv id="skillsSubHeading">
            <CapitalSubHeadingText>Skills</CapitalSubHeadingText>
            <HorizontalRule />
          </CapitalSubHeadingDiv>
        )}
        <SkillsListBody>{loadSkillsList()}</SkillsListBody>
      </SkillsCompleteDiv>
    </CompleteResumeDiv>
  );
}

import { useState } from 'react';
import { Completediv, GlobalStyle } from './components/styles/Completediv';
import { ContentDiv } from './components/styles/ContentDiv';
import {
  HeaderDiv,
  HeaderName,
  HeaderImageDiv,
} from './components/styles/HeaderDiv';
import {
  FooterDiv,
  Copyright,
  FooterText,
} from './components/styles/FooterDiv';
import { LeftDiv } from './components/styles/LeftDiv';
import { RightDiv } from './components/styles/RightDiv';
import { FormDiv } from './components/styles/FormContent';
import BasicInfo from './components/BasicInfo';
import EducationInfo from './components/Educationinfo';
import JobEx from './components/JobExperience';
import ProjectInfo from './components/ProjectsInfo';
import Skills from './components/Skillsinfo';
import RenderResume from './components/Render';
import mockData from './components/mock-data';
import styled from 'styled-components';
import generatePDF, { Margin } from 'react-to-pdf';
import { FormBtn } from './components/styles/FormStyling';

const TopButtonsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1;
  flex-wrap: wrap;
`;

const BtnGrpDiv = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const InputCompleteDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const options = {
  filename: 'resume.pdf',
  method: 'save',
  page: {
    margin: Margin.SMALL,
    format: 'A4',
    orientation: 'potrait',
  },
  canvas: {
    mimeType: 'image/jpeg',
    qualityRatio: 1,
  },
};

function App() {
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    phoneno: '',
    email: '',
  });
  const [educationInfo, setEducationInfo] = useState([
    {
      universityName: '',
      startDate: '',
      endDate: '',
      degree: '',
      city: '',
      state: '',
      gpa: '',
      id: 1,
    },
    {
      universityName: '',
      startDate: '',
      endDate: '',
      degree: '',
      city: '',
      state: '',
      gpa: '',
      id: 2,
    },
  ]);
  const [education2, setEducation2] = useState(false);
  const [experience, setExperience] = useState([
    {
      companyName: '',
      jobTitle: '',
      city: '',
      state: '',
      fromDate: '',
      toDate: '',
      jobDone: ['', '', '', '', ''],
      jobDoneCounter: 1,
      id: 1,
    },
    {
      companyName: '',
      jobTitle: '',
      city: '',
      state: '',
      fromDate: '',
      toDate: '',
      jobDone: ['', '', '', '', ''],
      jobDoneCounter: 1,
      id: 2,
    },
  ]);
  const [experienceShow, setExperienceShow] = useState(false);
  const [projects, setProjects] = useState([
    {
      projectName: '',
      projectTechnologies: '',
      projectSummary: '',
      id: 1,
    },
    {
      projectName: '',
      projectTechnologies: '',
      projectSummary: '',
      id: 2,
    },
    {
      projectName: '',
      projectTechnologies: '',
      projectSummary: '',
      id: 3,
    },
  ]);

  const [projectCounter, setProjectCounter] = useState(0);

  const [skillsList, setSkillsList] = useState(['', '', '', '', '', '']);
  const [skillsCounter, setSkillsCounter] = useState(0);

  function changeEducation() {
    setEducation2(!education2);
  }

  function onChangeName(newName) {
    let newBasicInfo = {
      name: newName,
      phoneno: basicInfo.phoneno,
      email: basicInfo.email,
    };
    setBasicInfo(newBasicInfo);
  }

  function onChangePhoneno(newPhoneno) {
    let newBasicInfo = {
      name: basicInfo.name,
      phoneno: newPhoneno,
      email: basicInfo.email,
    };
    setBasicInfo(newBasicInfo);
  }

  function onChangeEmail(newEmail) {
    let newBasicInfo = {
      name: basicInfo.name,
      phoneno: basicInfo.phoneno,
      email: newEmail,
    };
    setBasicInfo(newBasicInfo);
  }
  function onChangeUniversityName(newUniversityName, id) {
    let newEducationInfo = {
      universityName: newUniversityName,
      startDate: educationInfo[id - 1].startDate,
      endDate: educationInfo[id - 1].endDate,
      degree: educationInfo[id - 1].degree,
      city: educationInfo[id - 1].city,
      state: educationInfo[id - 1].state,
      id: id,
    };
    let newEducationList = [];
    if (id === 1) {
      newEducationList = educationInfo.filter((obj) => obj.id != 1);
      newEducationList = [newEducationInfo, ...newEducationList];
    } else {
      newEducationList = educationInfo.filter((obj) => obj.id != 2);
      newEducationList = [...newEducationList, newEducationInfo];
    }
    setEducationInfo(newEducationList);
  }

  function onChangeStartDate(newStartDate, id) {
    console.log(id);
    let newEducationInfo = {
      universityName: educationInfo[id - 1].universityName,
      startDate: newStartDate,
      endDate: educationInfo[id - 1].endDate,
      degree: educationInfo[id - 1].degree,
      city: educationInfo[id - 1].city,
      state: educationInfo[id - 1].state,
      gpa: educationInfo[id - 1].gpa,
      id: id,
    };
    let newEducationList = [];
    if (id === 1) {
      newEducationList = educationInfo.filter((obj) => obj.id != 1);
      newEducationList = [newEducationInfo, ...newEducationList];
    } else {
      newEducationList = educationInfo.filter((obj) => obj.id != 2);
      newEducationList = [...newEducationList, newEducationInfo];
    }
    setEducationInfo(newEducationList);
  }

  function onChangeEndDate(newEndDate, id) {
    let newEducationInfo = {
      universityName: educationInfo[id - 1].universityName,
      startDate: educationInfo[id - 1].startDate,
      endDate: newEndDate,
      degree: educationInfo[id - 1].degree,
      city: educationInfo[id - 1].city,
      state: educationInfo[id - 1].state,
      gpa: educationInfo[id - 1].gpa,
      id: id,
    };
    let newEducationList = [];
    if (id === 1) {
      newEducationList = educationInfo.filter((obj) => obj.id != 1);
      newEducationList = [newEducationInfo, ...newEducationList];
    } else {
      newEducationList = educationInfo.filter((obj) => obj.id != 2);
      newEducationList = [...newEducationList, newEducationInfo];
    }
    setEducationInfo(newEducationList);
  }

  function onChangeDegree(newDegree, id) {
    let newEducationInfo = {
      universityName: educationInfo[id - 1].universityName,
      startDate: educationInfo[id - 1].startDate,
      endDate: educationInfo[id - 1].endDate,
      degree: newDegree,
      city: educationInfo[id - 1].city,
      state: educationInfo[id - 1].state,
      gpa: educationInfo[id - 1].gpa,
      id: id,
    };
    let newEducationList = [];
    if (id === 1) {
      newEducationList = educationInfo.filter((obj) => obj.id != 1);
      newEducationList = [newEducationInfo, ...newEducationList];
    } else {
      newEducationList = educationInfo.filter((obj) => obj.id != 2);
      newEducationList = [...newEducationList, newEducationInfo];
    }
    setEducationInfo(newEducationList);
  }

  function onChangeCity(newCity, id) {
    let newEducationInfo = {
      universityName: educationInfo[id - 1].universityName,
      startDate: educationInfo[id - 1].startDate,
      endDate: educationInfo[id - 1].endDate,
      degree: educationInfo[id - 1].degree,
      city: newCity,
      state: educationInfo[id - 1].state,
      gpa: educationInfo[id - 1].gpa,
      id: id,
    };
    let newEducationList = [];
    if (id === 1) {
      newEducationList = educationInfo.filter((obj) => obj.id != 1);
      newEducationList = [newEducationInfo, ...newEducationList];
    } else {
      newEducationList = educationInfo.filter((obj) => obj.id != 2);
      newEducationList = [...newEducationList, newEducationInfo];
    }
    setEducationInfo(newEducationList);
  }

  function onChangeState(newState, id) {
    let newEducationInfo = {
      universityName: educationInfo[id - 1].universityName,
      startDate: educationInfo[id - 1].startDate,
      endDate: educationInfo[id - 1].endDate,
      degree: educationInfo[id - 1].degree,
      city: educationInfo[id - 1].city,
      gpa: educationInfo[id - 1].gpa,
      state: newState,
      id: id,
    };
    let newEducationList = [];
    if (id === 1) {
      newEducationList = educationInfo.filter((obj) => obj.id != 1);
      newEducationList = [newEducationInfo, ...newEducationList];
    } else {
      newEducationList = educationInfo.filter((obj) => obj.id != 2);
      newEducationList = [...newEducationList, newEducationInfo];
    }
    setEducationInfo(newEducationList);
  }

  function onChangeGpa(newGpa, id) {
    let newEducationInfo = {
      universityName: educationInfo[id - 1].universityName,
      startDate: educationInfo[id - 1].startDate,
      endDate: educationInfo[id - 1].endDate,
      degree: educationInfo[id - 1].degree,
      city: educationInfo[id - 1].city,
      state: educationInfo[id - 1].state,
      gpa: newGpa,
      id: id,
    };
    let newEducationList = [];
    if (id === 1) {
      newEducationList = educationInfo.filter((obj) => obj.id != 1);
      newEducationList = [newEducationInfo, ...newEducationList];
    } else {
      newEducationList = educationInfo.filter((obj) => obj.id != 2);
      newEducationList = [...newEducationList, newEducationInfo];
    }
    setEducationInfo(newEducationList);
  }

  function onChangeCompany(newCompany, id) {
    let newJobEx = {
      companyName: newCompany,
      jobTitle: experience[id - 1].jobTitle,
      city: experience[id - 1].city,
      state: experience[id - 1].state,
      fromDate: experience[id - 1].fromDate,
      toDate: experience[id - 1].toDate,
      jobDone: experience[id - 1].jobDone,
      jobDoneCounter: experience[id - 1].jobDoneCounter,
      id: id,
    };
    let newExperienceList = [];
    if (id === 1) {
      newExperienceList = experience.filter((obj) => obj.id != 1);
      newExperienceList = [newJobEx, ...newExperienceList];
    } else {
      newExperienceList = experience.filter((obj) => obj.id != 2);
      newExperienceList = [...newExperienceList, newJobEx];
    }
    setExperience(newExperienceList);
  }

  function onChangeJobTitle(newJobtitle, id) {
    let newJobEx = {
      companyName: experience[id - 1].companyName,
      jobTitle: newJobtitle,
      city: experience[id - 1].city,
      state: experience[id - 1].state,
      fromDate: experience[id - 1].fromDate,
      toDate: experience[id - 1].toDate,
      jobDone: experience[id - 1].jobDone,
      jobDoneCounter: experience[id - 1].jobDoneCounter,
      id: id,
    };
    let newExperienceList = [];
    if (id === 1) {
      newExperienceList = experience.filter((obj) => obj.id != 1);
      newExperienceList = [newJobEx, ...newExperienceList];
    } else {
      newExperienceList = experience.filter((obj) => obj.id != 2);
      newExperienceList = [...newExperienceList, newJobEx];
    }
    setExperience(newExperienceList);
  }

  function onChangeCompanyStartDate(newStartDate, id) {
    let newJobEx = {
      companyName: experience[id - 1].companyName,
      jobTitle: experience[id - 1].jobTitle,
      city: experience[id - 1].city,
      state: experience[id - 1].state,
      fromDate: newStartDate,
      toDate: experience[id - 1].toDate,
      jobDone: experience[id - 1].jobDone,
      jobDoneCounter: experience[id - 1].jobDoneCounter,
      id: id,
    };
    let newExperienceList = [];
    if (id === 1) {
      newExperienceList = experience.filter((obj) => obj.id != 1);
      newExperienceList = [newJobEx, ...newExperienceList];
    } else {
      newExperienceList = experience.filter((obj) => obj.id != 2);
      newExperienceList = [...newExperienceList, newJobEx];
    }
    setExperience(newExperienceList);
  }

  function onChangeCompanyEndDate(newEndDate, id) {
    let newJobEx = {
      companyName: experience[id - 1].companyName,
      jobTitle: experience[id - 1].jobTitle,
      city: experience[id - 1].city,
      state: experience[id - 1].state,
      fromDate: experience[id - 1].fromDate,
      toDate: newEndDate,
      jobDone: experience[id - 1].jobDone,
      jobDoneCounter: experience[id - 1].jobDoneCounter,
      id: id,
    };
    let newExperienceList = [];
    if (id === 1) {
      newExperienceList = experience.filter((obj) => obj.id != 1);
      newExperienceList = [newJobEx, ...newExperienceList];
    } else {
      newExperienceList = experience.filter((obj) => obj.id != 2);
      newExperienceList = [...newExperienceList, newJobEx];
    }
    setExperience(newExperienceList);
  }

  function onChangeJobState(newState, id) {
    let newJobEx = {
      companyName: experience[id - 1].companyName,
      jobTitle: experience[id - 1].jobTitle,
      city: experience[id - 1].city,
      state: newState,
      fromDate: experience[id - 1].fromDate,
      toDate: experience[id - 1].toDate,
      jobDone: experience[id - 1].jobDone,
      jobDoneCounter: experience[id - 1].jobDoneCounter,
      id: id,
    };
    let newExperienceList = [];
    if (id === 1) {
      newExperienceList = experience.filter((obj) => obj.id != 1);
      newExperienceList = [newJobEx, ...newExperienceList];
    } else {
      newExperienceList = experience.filter((obj) => obj.id != 2);
      newExperienceList = [...newExperienceList, newJobEx];
    }
    setExperience(newExperienceList);
  }

  function onChangeCompanyCity(newCity, id) {
    let newJobEx = {
      companyName: experience[id - 1].companyName,
      jobTitle: experience[id - 1].jobTitle,
      city: newCity,
      state: experience[id - 1].state,
      fromDate: experience[id - 1].fromDate,
      toDate: experience[id - 1].toDate,
      jobDone: experience[id - 1].jobDone,
      jobDoneCounter: experience[id - 1].jobDoneCounter,
      id: id,
    };
    let newExperienceList = [];
    if (id === 1) {
      newExperienceList = experience.filter((obj) => obj.id != 1);
      newExperienceList = [newJobEx, ...newExperienceList];
    } else {
      newExperienceList = experience.filter((obj) => obj.id != 2);
      newExperienceList = [...newExperienceList, newJobEx];
    }
    setExperience(newExperienceList);
  }

  function onChangeCompanyJobDone(newJobDone, id, index) {
    let newJobEx = {
      companyName: experience[id - 1].companyName,
      jobTitle: experience[id - 1].jobTitle,
      city: experience[id - 1].city,
      state: experience[id - 1].state,
      fromDate: experience[id - 1].fromDate,
      toDate: experience[id - 1].toDate,
      jobDoneCounter: experience[id - 1].jobDoneCounter,
      id: id,
    };
    let jobDonePrev = experience[id - 1].jobDone.splice(0, index);
    let jobDoneAfter = experience[id - 1].jobDone.splice(
      index + 1,
      experience[id - 1].jobDone.length - 1,
    );
    let newJobDoneList = [...jobDonePrev, newJobDone, ...jobDoneAfter];
    newJobEx = {
      ...newJobEx,
      jobDone: newJobDoneList,
    };
    let newExperienceList = [];
    if (id === 1) {
      newExperienceList = experience.filter((obj) => obj.id != 1);
      newExperienceList = [newJobEx, ...newExperienceList];
    } else {
      newExperienceList = experience.filter((obj) => obj.id != 2);
      newExperienceList = [...newExperienceList, newJobEx];
    }
    setExperience(newExperienceList);
  }

  function onAddJobDone(id) {
    if (experience[id - 1].jobDoneCounter > 4) return;
    let newJobEx = {
      companyName: experience[id - 1].companyName,
      jobTitle: experience[id - 1].jobTitle,
      city: experience[id - 1].city,
      state: experience[id - 1].state,
      fromDate: experience[id - 1].fromDate,
      toDate: experience[id - 1].toDate,
      jobDone: experience[id - 1].jobDone,
      jobDoneCounter: experience[id - 1].jobDoneCounter + 1,
      id: id,
    };
    let newExperienceList = [];
    if (id === 1) {
      newExperienceList = experience.filter((obj) => obj.id != 1);
      newExperienceList = [newJobEx, ...newExperienceList];
    } else {
      newExperienceList = experience.filter((obj) => obj.id != 2);
      newExperienceList = [...newExperienceList, newJobEx];
    }
    console.log(newExperienceList, 'in Add job done');
    setExperience(newExperienceList);
  }

  function onRemoveJobDone(id) {
    if (experience[id - 1].jobDoneCounter < 0) return;
    let newJobDoneList = ['', '', '', '', ''];
    for (let i = 0; i < experience[id - 1].jobDoneCounter - 1; i++) {
      newJobDoneList[i] = experience[id - 1].jobDone[i];
    }
    let newJobEx = {
      companyName: experience[id - 1].companyName,
      jobTitle: experience[id - 1].jobTitle,
      city: experience[id - 1].city,
      state: experience[id - 1].state,
      fromDate: experience[id - 1].fromDate,
      toDate: experience[id - 1].toDate,
      jobDone: newJobDoneList,
      jobDoneCounter: experience[id - 1].jobDoneCounter - 1,
      id: id,
    };
    let newExperienceList = [];
    if (id === 1) {
      newExperienceList = experience.filter((obj) => obj.id != 1);
      newExperienceList = [newJobEx, ...newExperienceList];
    } else {
      newExperienceList = experience.filter((obj) => obj.id != 2);
      newExperienceList = [...newExperienceList, newJobEx];
    }
    setExperience(newExperienceList);
  }

  function changeExperience() {
    setExperienceShow(!experienceShow);
  }

  function onChangeProjectName(newProjectName, id) {
    let newProjectDetails = {
      projectName: newProjectName,
      projectTechnologies: projects[id - 1].projectTechnologies,
      projectSummary: projects[id - 1].projectSummary,
      id: id,
    };
    if (id === 1) {
      let newProjectDetailsList = projects.filter((obj) => obj.id != 1);
      newProjectDetailsList = [newProjectDetails, ...newProjectDetailsList];
      setProjects(newProjectDetailsList);
    } else if (id === 2) {
      let newProjectD1 = projects.filter((obj) => obj.id === 1);
      let newProjectD2 = projects.filter((obj) => obj.id === 3);
      let newProjectDetailsList = [
        ...newProjectD1,
        newProjectDetails,
        ...newProjectD2,
      ];
      setProjects(newProjectDetailsList);
    } else {
      let newProjectD1 = projects.filter((obj) => obj.id != 3);
      let newProjectDetailsList = [...newProjectD1, newProjectDetails];
      setProjects(newProjectDetailsList);
    }
  }

  function onChangeTechnologies(newTechnology, id) {
    let newProjectDetails = {
      projectName: projects[id - 1].projectName,
      projectTechnologies: newTechnology,
      projectSummary: projects[id - 1].projectSummary,
      id: id,
    };
    if (id === 1) {
      let newProjectDetailsList = projects.filter((obj) => obj.id != 1);
      newProjectDetailsList = [newProjectDetails, ...newProjectDetailsList];
      setProjects(newProjectDetailsList);
    } else if (id === 2) {
      let newProjectD1 = projects.filter((obj) => obj.id === 1);
      let newProjectD2 = projects.filter((obj) => obj.id === 3);
      let newProjectDetailsList = [
        ...newProjectD1,
        newProjectDetails,
        ...newProjectD2,
      ];
      setProjects(newProjectDetailsList);
    } else {
      let newProjectD1 = projects.filter((obj) => obj.id != 3);
      let newProjectDetailsList = [...newProjectD1, newProjectDetails];
      setProjects(newProjectDetailsList);
    }
  }

  function onChangeProjectSummary(newProjectSummary, id) {
    let newProjectDetails = {
      projectName: projects[id - 1].projectName,
      projectTechnologies: projects[id - 1].projectTechnologies,
      projectSummary: newProjectSummary,
      id: id,
    };
    if (id === 1) {
      let newProjectDetailsList = projects.filter((obj) => obj.id != 1);
      newProjectDetailsList = [newProjectDetails, ...newProjectDetailsList];
      setProjects(newProjectDetailsList);
    } else if (id === 2) {
      let newProjectD1 = projects.filter((obj) => obj.id === 1);
      let newProjectD2 = projects.filter((obj) => obj.id === 3);
      let newProjectDetailsList = [
        ...newProjectD1,
        newProjectDetails,
        ...newProjectD2,
      ];
      setProjects(newProjectDetailsList);
    } else {
      let newProjectD1 = projects.filter((obj) => obj.id != 3);
      let newProjectDetailsList = [...newProjectD1, newProjectDetails];
      setProjects(newProjectDetailsList);
    }
  }

  function onChangeSkills(newSkill, id) {
    console.log(newSkill, id);
    let skillsListBefore = [];
    let skillsListAfter = [];
    for (let i = 0; i <= skillsCounter; i++) {
      if (i < id) {
        skillsListBefore.push(skillsList[i]);
      } else if (i > id) {
        skillsListAfter.push(skillsList[i]);
      }
    }
    let skillsListComplete = [
      ...skillsListBefore,
      newSkill,
      ...skillsListAfter,
    ];
    console.log('skills List Complete', skillsListComplete);
    setSkillsList(skillsListComplete);
  }

  function createSkills() {
    let skillsRenderList = [];
    console.log(skillsList);
    for (let i = 0; i <= skillsCounter; i++) {
      skillsRenderList.push(
        <Skills
          id={i}
          onChangeSkills={onChangeSkills}
          skillsInfo={skillsList[i]}
          key={i}
        />,
      );
    }
    return skillsRenderList.length > 0 ? skillsRenderList : null;
  }

  function removeSkills() {
    if (skillsCounter <= 0) return;
    let newSkillsInfo = skillsList.splice(0, skillsCounter);
    newSkillsInfo[skillsCounter] = '';
    setSkillsList(newSkillsInfo);
    setSkillsCounter(skillsCounter - 1);
  }

  function addSkills() {
    if (skillsCounter >= 4) return;
    setSkillsCounter(skillsCounter + 1);
  }

  function createProjects() {
    let projectList = [];
    for (let i = 0; i <= projectCounter; i++) {
      projectList.push(
        <ProjectInfo
          onChangeProjectName={onChangeProjectName}
          onChangeTechnologies={onChangeTechnologies}
          onChangeProjectSummary={onChangeProjectSummary}
          index={i + 1}
          ProjectInfo={projects[i]}
          key={i}
        />,
      );
    }
    return projectList;
  }

  function resetBasicInfo() {
    let newBasicInfo = {
      name: '',
      phoneno: '',
      email: '',
    };
    setBasicInfo(newBasicInfo);
  }

  function resetEducation() {
    let newEducationInfo = [
      {
        universityName: '',
        startDate: '',
        endDate: '',
        degree: '',
        city: '',
        state: '',
        gpa: '',
        id: 1,
      },
      {
        universityName: '',
        startDate: '',
        endDate: '',
        degree: '',
        city: '',
        state: '',
        gpa: '',
        id: 2,
      },
    ];
    setEducation2(false);
    setEducationInfo(newEducationInfo);
  }

  function resetExperienceInfo() {
    let newExperience = [
      {
        companyName: '',
        jobTitle: '',
        city: '',
        state: '',
        fromDate: '',
        toDate: '',
        jobDone: ['', '', '', '', ''],
        jobDoneCounter: 1,
        id: 1,
      },
      {
        companyName: '',
        jobTitle: '',
        city: '',
        state: '',
        fromDate: '',
        toDate: '',
        jobDone: ['', '', '', '', ''],
        jobDoneCounter: 1,
        id: 2,
      },
    ];
    setExperienceShow(false);
    setExperience(newExperience);
  }

  function resetProjectInfo() {
    let newprojectInfo = [
      {
        projectName: '',
        projectTechnologies: '',
        projectSummary: '',
        id: 1,
      },
      {
        projectName: '',
        projectTechnologies: '',
        projectSummary: '',
        id: 2,
      },
      {
        projectName: '',
        projectTechnologies: '',
        projectSummary: '',
        id: 3,
      },
    ];
    setProjectCounter(0);
    setProjects(newprojectInfo);
  }

  function resetSkillsInfo() {
    let skillsCounter = 0;
    let skillsList = ['', '', '', '', '', ''];
    setSkillsCounter(skillsCounter);
    setSkillsList(skillsList);
  }

  function loadExample() {
    let newPersonalInfo = mockData['personalInfo'];
    let newEducationInfo = mockData['education'];
    let newExperience = mockData['workExperience'];
    let newProjectList = mockData['projects'];
    let newProjectCounter = mockData['projectCounter'];
    let newSkillsList = ['C', 'JavaScript', 'C++', 'Python', 'HTML/CSS'];
    let newSkillsListCounter = mockData['skillsCounter'];
    setBasicInfo(newPersonalInfo);
    setEducationInfo(newEducationInfo);
    setEducation2(true);
    setExperience(newExperience);
    setExperienceShow(true);
    setProjects(newProjectList);
    setProjectCounter(newProjectCounter);
    setSkillsList(newSkillsList);
    setSkillsCounter(newSkillsListCounter);
  }

  function resetExample() {
    resetBasicInfo();
    resetEducation();
    resetExperienceInfo();
    resetProjectInfo();
    resetSkillsInfo();
  }

  function generatePdf() {
    let resumeDiv = () => document.querySelector('#resumeDownload');

    return generatePDF(resumeDiv, options);
  }

  return (
    <>
      <GlobalStyle />
      <Completediv>
        <ContentDiv>
          <LeftDiv>
            <HeaderDiv>
              <HeaderImageDiv>
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios-filled/35/resume.png"
                  alt="resume-icon"
                />
              </HeaderImageDiv>
              <HeaderName>Resume Builder</HeaderName>
              <TopButtonsDiv>
                <FormBtn BgColor="grey" Color="white" onClick={loadExample}>
                  Load Example
                </FormBtn>
                <FormBtn Height="2rem" onClick={resetExample}>
                  Reset Example
                </FormBtn>
                <FormBtn BgColor="green" Color="white" onClick={generatePdf}>
                  Save resume as Pdf
                </FormBtn>
              </TopButtonsDiv>
            </HeaderDiv>
            <FormDiv>
              <InputCompleteDiv>
                <BasicInfo
                  basicInfo={basicInfo}
                  onChangeName={onChangeName}
                  onChangeEmail={onChangeEmail}
                  onChangePhoneno={onChangePhoneno}
                  resetBasicInfo={resetBasicInfo}
                ></BasicInfo>
              </InputCompleteDiv>
              <InputCompleteDiv>
                <EducationInfo
                  id={1}
                  educationInfo={educationInfo[0]}
                  onChangeUniversityName={onChangeUniversityName}
                  onChangeStartDate={onChangeStartDate}
                  onChangeEndDate={onChangeEndDate}
                  onChangeDegree={onChangeDegree}
                  onChangeState={onChangeState}
                  onChangeCity={onChangeCity}
                  onChangeGpa={onChangeGpa}
                ></EducationInfo>
                {education2 && (
                  <EducationInfo
                    id={2}
                    educationInfo={educationInfo[1]}
                    onChangeUniversityName={onChangeUniversityName}
                    onChangeStartDate={onChangeStartDate}
                    onChangeEndDate={onChangeEndDate}
                    onChangeDegree={onChangeDegree}
                    onChangeState={onChangeState}
                    onChangeCity={onChangeCity}
                    onChangeGpa={onChangeGpa}
                  ></EducationInfo>
                )}
                <BtnGrpDiv>
                  <FormBtn onClick={changeEducation}>
                    {education2 ? 'Remove' : 'Add'}
                  </FormBtn>
                  <FormBtn
                    onClick={resetEducation}
                    BgColor="grey"
                    Color="white"
                    Height="2rem"
                  >
                    Reset Education
                  </FormBtn>
                </BtnGrpDiv>
              </InputCompleteDiv>
              <JobEx
                workEx={experience[0]}
                onChangeCompany={onChangeCompany}
                onChangeTitle={onChangeJobTitle}
                onChangeStartDate={onChangeCompanyStartDate}
                onChangeEndDate={onChangeCompanyEndDate}
                onChangeWorkDone={onChangeCompanyJobDone}
                onChangeState={onChangeJobState}
                onChangeCity={onChangeCompanyCity}
                onAddJobDone={onAddJobDone}
                onRemoveJobDone={onRemoveJobDone}
                id={1}
              />
              {experienceShow && (
                <JobEx
                  workEx={experience[1]}
                  onChangeCompany={onChangeCompany}
                  onChangeTitle={onChangeJobTitle}
                  onChangeStartDate={onChangeCompanyStartDate}
                  onChangeEndDate={onChangeCompanyEndDate}
                  onChangeWorkDone={onChangeCompanyJobDone}
                  onChangeState={onChangeJobState}
                  onChangeCity={onChangeCompanyCity}
                  onAddJobDone={onAddJobDone}
                  onRemoveJobDone={onRemoveJobDone}
                  id={2}
                />
              )}
              <BtnGrpDiv>
                <FormBtn Height="2rem" onClick={changeExperience}>
                  {experienceShow ? 'Remove' : 'Add'}
                </FormBtn>
                <FormBtn
                  BgColor="grey"
                  Color="white"
                  Height="2rem"
                  onClick={resetExperienceInfo}
                >
                  Reset Experience
                </FormBtn>
              </BtnGrpDiv>
              {createProjects()}
              <BtnGrpDiv>
                {' '}
                {projectCounter > 0 && (
                  <FormBtn
                    Height="2rem"
                    onClick={() => setProjectCounter(projectCounter - 1)}
                  >
                    Remove
                  </FormBtn>
                )}
                {projectCounter < 2 && (
                  <FormBtn
                    onClick={() => setProjectCounter(projectCounter + 1)}
                  >
                    Add
                  </FormBtn>
                )}
                <FormBtn
                  BgColor="grey"
                  Color="white"
                  Height="2rem"
                  onClick={resetProjectInfo}
                >
                  Reset Project
                </FormBtn>
              </BtnGrpDiv>
              {createSkills()}
              <BtnGrpDiv>
                {skillsCounter < 4 && (
                  <FormBtn onClick={addSkills}>Add Skills</FormBtn>
                )}
                {skillsCounter > 0 && (
                  <FormBtn onClick={removeSkills}>Remove Skills</FormBtn>
                )}
                <FormBtn
                  BgColor="grey"
                  Color="white"
                  Height="2rem"
                  onClick={resetSkillsInfo}
                >
                  Reset Skills
                </FormBtn>
              </BtnGrpDiv>
            </FormDiv>
          </LeftDiv>
          <RightDiv>
            <RenderResume
              basicInfo={basicInfo}
              educationInfo={educationInfo}
              education2Flag={education2}
              experience={experience}
              experienceFlag={experienceShow}
              projects={projects}
              projectCounter={projectCounter}
              skillsList={skillsList}
              skillsCounter={skillsCounter}
            />
          </RightDiv>
        </ContentDiv>
        <FooterDiv>
          <Copyright>
            <FooterText PaddingRight="0.25rem" PaddingLeft="0" MarginLeft="0">
              Copyright
            </FooterText>
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/20/FFFFFF/copyright.png"
              alt="copyright"
            />
            <FooterText
              PaddingLeft="0.25rem"
              MarginRight="0.25rem"
              PaddingRight="0"
            >
              {' '}
              2024 Manikanth
            </FooterText>
          </Copyright>
          <div class="github-icon">
            <a
              href="https://github.com/manikanth1811/resume-builder"
              target="_blank"
              class="github-link"
            >
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-outlined/24/FFFFFF/github.png"
                alt="github"
              />
            </a>
          </div>
        </FooterDiv>
      </Completediv>
    </>
  );
}

export default App;

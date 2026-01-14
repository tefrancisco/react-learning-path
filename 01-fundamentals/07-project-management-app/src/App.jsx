import { useState } from 'react'

import ProjectSidebar from './components/ProjectSidebar.jsx'
import NewProject from './components/NewProject.jsx'
import NoProjectSelected from './components/NoProjectSelected.jsx'
import SelectedProject from './components/SelectedProject.jsx'

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const taskId = Math.random()
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      }

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  
  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        // Spreading the old state into the new object so we don't lose it
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id
      )
      }
    })
  }


  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        // Spreading the old state into the new object so we don't lose it
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleAppProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        // Spreading the old state into the new object so we don't lose it
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        // Spreading the old state into the new object so we don't lose it
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  function handleDeleteProject(){
    setProjectsState((prevState) => {
      return {
        // Spreading the old state into the new object so we don't lose it
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId
      )
      }
    })
  }

  console.log(projectsState)

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  let content = <SelectedProject 
  project={selectedProject} 
  onDelete={handleDeleteProject} 
  onAddTask={handleAddTask} 
  onDeleteTask={handleDeleteTask}
  tasks={projectsState.tasks}
  />;

  if(projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAppProject} onCancel={handleCancelAddProject} />
  } else if(projectsState.selectedProjectId === undefined) {
    content =  <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
    <ProjectSidebar 
    onStartAddProject={handleStartAddProject} 
    projects={projectsState.projects}
    onSelectProject={handleSelectProject}
    selectedProjectId={projectsState.selectedProjectId}
    />
    {content}
    </main>
  );
}

export default App;

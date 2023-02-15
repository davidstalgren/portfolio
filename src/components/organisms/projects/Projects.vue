<template>
    <div>
      <h1>Projects</h1>
        <div class="project__cards">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
    </div>
  </template>
  
  <script>
  import ProjectCard from '../../molecules/projectcard/ProjectCard.vue';
  
  export default {
    name: 'Projects',
    components: {
      ProjectCard
    },
    data() {
      return {
        projects: [
          {
            id: 1,
            title: "Vue.js Project",
            description: "This is a project built with Vue.js that does something cool.",
            image: "https://source.unsplash.com/300x200/?random",
            tags: ["Vue.js", "JavaScript", "Web Development"],
            link: "https://github.com/your-username/vue-project"
          },
          {
            id: 2,
            title: "React Project",
            description: "This is a project built with React that does something awesome.",
            image: "https://source.unsplash.com/300x200/?random",
            tags: ["React", "JavaScript", "Web Development"],
            link: "https://github.com/your-username/react-project"
          },
          {
            id: 3,
            title: "Coooool Project",
            description: "This is a project built with GHATGPT that does something awesome.",
            image: "https://source.unsplash.com/300x200/?random",
            tags: ["React", "JavaScript", "Web Development", "CHATGPT"],
            link: "https://github.com/your-username/react-project"
          }
        ]
      }
    }
  }
  </script>

<style scoped lang="scss">
@import '_projects.scss'
</style>
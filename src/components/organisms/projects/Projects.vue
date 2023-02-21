<template>
  <section id="projects">
    <div class="projects__container">
			<h2 class="projects__h2">
				Projects
			</h2>
      <div class="project__cards">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </section>
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
            title: "TODO app",
            description: "School solo-project of a working Todo app in javascript that uses localstorage and visual-cues for deadlines",
            image: "src/assets/projects/images/todo.png",
            tags: ["HTML", "SASS", "JavaScript", "Vite"],
            link: "https://davidstalgren.github.io/school-project-javascript-todoapp/",
            repo: "https://github.com/davidstalgren/school-project-javascript-todoapp"
          },
          {
            id: 2,
            title: "Rubberduck webshop",
            description: "School group-project of an e-commerce site, containing Rubberducks.",
            image: "src/assets/projects/images/rubberduck.png",
            tags: ["HTML", "SASS", "JavaScript"],
            link: "https://davidstalgren.github.io/Rubberduck-Webshop-groupassignment-from-school/",
            repo: "https://github.com/davidstalgren/Rubberduck-Webshop-groupassignment-from-school"
          },
          {
            id: 3,
            title: "Wheatly",
            description: "School group-project in Graphic tools and interface design course. We both made a design in figma (link in readme) and were given one that we made into this website.",
            image: "src/assets/projects/images/wheatly.png",
            tags: ["HTML", "SASS", "JavaScript", "Vite", "Gsap", "Vue", "Figma"],
            link: "https://davidstalgren.github.io/school-project-graphic-design-wheatly/",
            repo: "https://github.com/davidstalgren/school-project-graphic-design-wheatly"
          },
          {
            id: 4,
            title: "To the Moon",
            description: "One of the first projects in my education was to follow a design with only HTML and CSS. This was the result.",
            image: "src/assets/projects/images/tothemoon.png",
            tags: ["HTML", "SASS"],
            link: "https://davidstalgren.github.io/to-the-moon-school-project/",
            repo: "https://github.com/davidstalgren/to-the-moon-school-project"
          },
          {
            id: 5,
            title: "To the Moon",
            description: "One of the first projects in my education was to follow a design with only HTML and CSS. This was the result.",
            image: "../../../../../../src/assets/projects/images/tothemoon.png",
            tags: ["HTML", "SASS"],
            link: "https://davidstalgren.github.io/to-the-moon-school-project/",
            repo: "https://github.com/davidstalgren/to-the-moon-school-project"
          }
        ]
      }
    }
  }
  </script>

<style scoped lang="scss">
@import '_projects.scss'
</style>
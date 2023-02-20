<template>
  <div class="project-card">
    <div class="project-card-header">
      <img :src="project.image" alt="Project Image" />
      <div class="project-card-title">
        {{ project.title }}
      </div>
    </div>
    <div class="project-card-body">
      <div class="project-card-description">
        {{ project.description }}
      </div>
      <div class="project-card-tags">
        <span v-for="tag in project.tags" :key="tag" class="project-card-tag">
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="project-card-footer">
      <a :href="project.link" target="_blank" rel="noopener noreferrer" class="project-card-link">Live site</a>
      <a :href="project.repo" target="_blank" rel="noopener noreferrer" class="project-card-link">Repo</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
  
<style scoped lang="scss">
@import '_projectcard.scss'
</style>
  
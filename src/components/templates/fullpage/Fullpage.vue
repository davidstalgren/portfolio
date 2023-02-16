<script setup>
    import Headercontainer from '../../organisms/headercontainer/Headercontainer.vue'
    import Hero from '../../organisms/hero/Hero.vue'
    import About from '../../organisms/about/About.vue'
    import Projects from '../../organisms/projects/Projects.vue'
    import Contact from '../../organisms/contact/Contact.vue'
    import Footercontainer from '../../organisms/footercontainer/Footercontainer.vue'
</script>

<template>
    <Headercontainer />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footercontainer />
</template>

<style scoped lang="scss">
    @import '_fullpage.scss'
</style>
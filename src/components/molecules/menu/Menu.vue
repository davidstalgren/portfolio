<script>
export default {
    name: "menu",
    data() {
        return {
            scrolledNav: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        };
    },

    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },

    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },

    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },

        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false;
        },

        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        }
    }

};
</script>

<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav>
            <div class="branding">
                <img src="../../../assets/logo/logo2.png" alt="">
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><a href="#top" class="link">Home</a></li>
                <li><a href="#about" class="link">About</a></li>
                <li><a href="#projects" class="link">Projects</a></li>
                <li><a href="#contact" class="link">Contact</a></li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{ 'icon-active' : mobileNav }"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><a href="#top" class="link">Home</a></li>
                    <li><a href="#about" class="link">About</a></li>
                    <li><a href="#projects" class="link">Projects</a></li>
                    <li><a href="#contact" class="link">Contact</a></li>
                </ul>
            </transition>
        </nav>
    </header>
</template> 

<style scoped lang="scss">
@import '_menu.scss'
</style>
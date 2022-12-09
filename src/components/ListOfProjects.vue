<template>
    <div>
        List of projects:
        <ul>
            <li v-for="project in projects" :key="project.id">
                <RouterLink :to="`/projects/${project.id}`">
                    {{ project.id }} - {{ project.name }}
                </RouterLink>
            </li>

        </ul>
    </div>
</template>
<script>
// const API_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
import PROJECTS from '../projects.json'
export default {
    data() {
        return {
            projects: PROJECTS
            // projects: []
        }
    },
    methods: {
        getURLFromProject(melopuedoinventar) {
            return `/projects/${melopuedoinventar.id}`
        },
        async fetchProjects() {
            const response = await fetch(API_URL)

            return await response.json()
        }
    },
    // mounted() {
    // this.projects = this.fetchProjects()
    // }
}</script>
<style scoped>
div {
    background-color: #ccc;
    color: black
}
</style>
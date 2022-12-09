<template>
    <h1>Página de proyecto DETAIL</h1>
    <div style="background-color: red; color: black; font-size: 50px;">
        La ruta tiene este id: {{ projectId }}
    </div>
    <div v-if="project" style="background-color: red; color: black; font-size: 50px;">
        El proyecto es: {{ project.name }}
    </div>
    <div v-else style="background-color: red; color: black; font-size: 50px;">
        Project not found!
    </div>
    <input type="text" v-model="username" placeholder="Username">
    <ListOfProjects />
</template>
<script>
import PROJECTS from '../projects.json'
import ListOfProjects from '../components/ListOfProjects.vue';
export default {
    components: {
        ListOfProjects
    },
    data() {
        return {
            // projectId: this.$route.params.projectId,
            projects: PROJECTS,
            username: null
        }
    },
    computed: {
        projectId() {
            return this.$route.params.projectId
        },
        project() {
            return this.projects.find((project) =>
                (project.id === this.$route.params.projectId)
            )
        }
    },
    watch: {
        username() {
            // fetch the new data!
            alert("you changed the username!")
        }
    }
}

</script>
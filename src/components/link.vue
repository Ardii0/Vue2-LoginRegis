<template>
    <div style="text-align: center;">
        <h1 v-if="userRole === 'user'">User</h1>
        <h1 v-if="userRole === 'admin'">Admin</h1>
    </div>
</template>

<script>
export default {
    name: "LinkPage",
    computed: {
        userRole() {
            return JSON.parse(localStorage.getItem("USER_DATA")).role;
        },
    },
};
</script>
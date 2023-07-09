<template>
  <div>
    <h1>Logging in...</h1>
  </div>
</template>

<script>
export default {
  auth: false,
  methods: {
    async spotifyGetToken(code) {
      try {
        await this.$store.commit("spotify/changeCode", code);
        await this.$store.dispatch("spotify/fetchToken");
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  async mounted() {
    const code = await this.$route.query.code;
    await this.spotifyGetToken(code);
    await this.$auth.loginWith("local", { data: { code: code } });
    this.$router.push("/");
  },
};
</script>

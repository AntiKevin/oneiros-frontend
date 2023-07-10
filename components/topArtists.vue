<template>
  <c-box>
    <CHeading text-align="center" mb="4">
      ⚡️ Top Artistas Escutados
      <c-spinner
        v-if="loading"
        thickness="4px"
        speed="0.65s"
        empty-color="green.200"
        color="vue.500"
        size="xl"
      />
    </CHeading>
    <c-list class="list-container">
      <c-flex direction="column">
        <c-box
          p="4"
          mb="4"
          border-width="1.5px"
          rounded="lg"
          v-for="(artista, index) in artistas"
          :key="index"
          scroll-behavior="inside"
        >
          <c-avatar :src="artista.images.url" />
          <c-box>
            <c-text font-weight="bold">
              {{ artista.name }}
              <c-badge
                ml="1"
                v-for="(genero, index) in artista.genres.slice(0, 2)"
                :key="index"
                variant-color="green"
              >
                {{ genero }}
              </c-badge>
            </c-text>
          </c-box>
        </c-box>
      </c-flex>
    </c-list>
  </c-box>
</template>

<script>
import {
  CBox as cBox,
  CFlex as cFlex,
  CList as cList,
  CListItem as cListItem,
  CImage as cImage,
  CText as cText,
  CBadge as cBadge,
} from "@chakra-ui/vue";

export default {
  name: "CList",
  components: {
    cBox,
    cFlex,
    cList,
    cListItem,
    cImage,
    cText,
    cBadge,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    artistas() {
      return this.$store.state.difussionApi.top_artists;
    },
  },
  async mounted() {
    this.loading = true;
    await this.$store.dispatch("difussionApi/fetchTopArtists");
    this.loading = false;
  },
};
</script>
<style>
.list-container {
  max-height: 30rem; /* Defina aqui a altura máxima desejada */
  overflow-y: auto;
}
</style>

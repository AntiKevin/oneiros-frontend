
export const state = () => ({
    top_artists: [],
 });

export const mutations = {
    changeTopArtist(state, top_artists ){
        state.top_artists = top_artists;
    }
};
 
export const actions = { 
    async fetchTopArtists({commit}){
        const response = await this.$axios.get('/api/difussion/top-artists')
        commit('changeTopArtist',response.data)
    }
};


export const state = () => ({
    code: '',
    token_info: {}
 });

export const mutations = {
    changeCode(state, code) {
        state.code = code
    },
    ChangeTokenInfo(state, token) {
        state.token_info = token
    }
};
 
export const actions = {
    async fetchToken({commit, state}){
        const response = await this.$axios.post("/api/auth/token", { code: state.code });
        commit('ChangeTokenInfo', response.data)
    },
    async getSpotifyUrl(){
        const response = await this.$axios.get("/api/auth/get-url-login");
        return response.data.url
    }
 };

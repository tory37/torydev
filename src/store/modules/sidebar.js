export const namespaced = true;

export const state = {
  isOpen: false
};

export const mutations = {
  SET_OPEN(state) {
    state.isOpen = true;
  },
  SET_CLOSED(state) {
    state.isOpen = false;
  }
};

export const actions = {
  openSidebar({ commit }) {
    commit('SET_OPEN');
  },
  closeSidebar({ commit }) {
    commit('SET_CLOSED');
  }
};

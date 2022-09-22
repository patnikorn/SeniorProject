export const state = () => ({
    dialog: {
        isShow: false,
        title: '',
        message: ''
    },
    information: {
        userFirstName: '',
        userLastName: '',
        userIdNumber: '',
        email: ''
    },
    announcement: {
        title: '',
        subTitle: ''
    },
    complaint: {
        complaintFirstName: '',
        complaintLastName: '',
        complaintStudentId: '',
        complaintText: '',
    },
    survey: {
        title: '',
        subTitle: '',
        question: '',
        numberStudentDS: '',
        numberStudentSI: '',
    }
})

export const getters = {
    getInformation(state){
        return state.information
    },
    getDialog(state){
        return state.dialog
    },
    getAnnoucement(state){
        return state.announcement
    },
    getComplaint(state){
        return state.complaint
    },
    getSurvey(state){
        return state.survey
    }
}

export const mutations = {
    SET_INFORMATION(state, data){
        state.information = {
            ...state.information,
            ...data
        }
    },
    SET_DIALOG(state, data){
        state.dialog = {
            ...state.dialog,
            ...data
        }
    },
    SET_ANNOUCEMENT(state, data){
        state.announcement = {
            ...state.announcement,
            ...data
        }
    },
    SET_COMPLAINT(state, data){
        state.complaint = {
            ...state.complaint,
            ...data
        }
    },
    SET_SURVEY(state, data){
        state.survey = {
            ...state.survey,
            ...data
        }
    }
}

export const actions = {
    setInformation({ commit }, data){
        commit('SET_INFORMATION', data)
    },
    setDialog({ commit }, data){
        commit('SET_DIALOG', data)
    },
    setAnnoucement({ commit }, data){
        commit('SET_ANNOUCEMENT', data)
    },
    setComplaint({ commit }, data){
        commit('SET_COMPLAINT', data)
    },
    setSurvey({ commit }, data ) {
        commit('SET_SURVEY', data)
    }
}
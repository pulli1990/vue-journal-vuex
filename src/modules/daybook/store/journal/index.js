
import state from "./state"
import * as actions from './actions'
import * as getters from './getters'
import * as mutatios from './mutations'


const journalModule = {
    namespaced:true,
    actions,
    getters,
    mutatios,
    state
}

export default journalModule
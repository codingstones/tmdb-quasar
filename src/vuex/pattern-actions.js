export function queryAction(command, REQUEST, SUCCESS, ERROR) {
  return { run }

  async function run({ commit }, payload) {
    commit(REQUEST)
    try {
      const result = await command(payload)
      commit(SUCCESS, result)
    }
    catch (error) {
      commit(ERROR, error)
    }
  }
}

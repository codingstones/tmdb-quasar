import VueRouter from 'vue-router'

export const TMdbRouter = (router) => {
  if (!router) router = new VueRouter()
  return { navigateToFilm, navigateToCreateGig, navigateToAllGigs, getParam }

  function navigateToFilm(id1) {
    router.push(`film/${id1}`)
  }

  function navigateToCreateGig() {
    router.push({path: '/newGig'})
  }

  function navigateToAllGigs() {
    router.push({path: '/all'})
  }

  function getParam(id) {
    if (!router) return ''
    return router.currentRoute.params[id]
  }
}

export const jotaRouterMixin = {
  created: function () {
    this.jotaRouter = TMdbRouter(this.$router)
  }
}

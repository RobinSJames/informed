// import { Logger } from '../utils'

/**
 * Overrides nuxt auth module login and logout methods
 * to make sure we are redirecting users to the correct routes
 * during authentication process
 * @param app
 * @param redirect
 */
export default function ({ app, redirect, route }) {
  const $auth = app.$auth
  $auth.options.watchLoggedIn = true
  const _login = $auth.login.bind($auth)
  const _logout = $auth.logout.bind($auth)

  // if (!$auth.loggedIn) {
  //   console.log(route)
  //   redirect(`/login?redirect=${route.path}`)
  // }

  $auth.login = (...args) => {
    console.log($auth)
    const _ = _login(...args)
    _.then(() => {
      const login = $auth.options.redirect.login
      const home = $auth.options.redirect.home
      // const from = $auth.ctx.from.path
      const from = $auth.ctx
      // const next = from === login ? home : from
      const next = from === login ? home : home
      // Logger.info('Redirect to', next)
      redirect(302, next)
    })
    return _
  }

  $auth.logout = (...args) => {
    const _ = _logout(...args)
    _.then(() => {
      const login = $auth.options.redirect.login
      // Logger.info('Redirect', login)
      redirect(302, login)
    })
    return _
  }
}

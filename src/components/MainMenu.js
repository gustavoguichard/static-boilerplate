import $ from 'jquery'
import { classNames } from '../utils/helpers'

export default class MainMenu {
  static get selector() {
    return '.main-menu'
  }

  constructor(el, store) {
    this.el = el
    this.store = store

    this.listeners()

    store.subscribe(this.update.bind(this), 'showMenu')
  }

  update({ menuOpen, menuVisible }) {
    $(this.el)
      .attr('class', classNames({
        'menu-open': menuOpen,
        'menu-closed': !menuOpen,
      }))
  }

  listeners() {
    $('a', this.el).on('click', this.toggleMenu.bind(this))
  }

  toggleMenu(event) {
    this.store.dispatch({ name: 'TOGGLE_MENU' })
  }
}

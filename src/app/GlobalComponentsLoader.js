import Vue from 'vue'
import {
  QList,
  QListHeader,
  QItem,
  QBtn,
  QToolbar,
  QToolbarTitle,
  QInput,
  QField,
  QDatetime,
  QAjaxBar,
  QIcon,
  QCard,
  QCardSeparator,
  QCollapsible,
  QCardMedia,
  QCardMain,
  QCardTitle,
  QTransition,
  QSideLink,
  QScrollArea,
  QItemSide,
  QItemMain,
  QItemTile,
  QItemSeparator,
  QLayout,
  QSpinnerMat,
  QSpinner,
  QTabs,
  QInfiniteScroll,
  QRouteTab,
  QTabPane,
  QSearch
} from 'quasar-framework'
import LoadSpinner from '@/app/shared-components/LoadSpinner.vue'
import FormButton from '@/app/shared-components/FormButton.vue'
import BackToTopButton from '@/app/shared-components/BackToTopButton.vue'
import SideBar from '@/app/shared-components/SideBar.vue'
import Toolbar from '@/app/shared-components/Toolbar.vue'
import Tabs from '@/app/shared-components/Tabs.vue'
import ItemCard from '@/app/pages/Items/ItemCard.vue'
import ItemDetail from '@/app/pages/ItemDetail/ItemDetail.vue'
import Items from '@/app/pages/Items/Items.vue'

export function registerGlobalComponents() {
  Vue.config.productionTip = false

  Vue.component('LoadSpinner', LoadSpinner)
  Vue.component('ItemCard', ItemCard)
  Vue.component('ItemDetail', ItemDetail)
  Vue.component('Items', Items)
  Vue.component('QList', QList)
  Vue.component('QListHeader', QListHeader)
  Vue.component('QItem', QItem)
  Vue.component('QIcon', QIcon)
  Vue.component('QBtn', QBtn)
  Vue.component('QToolbar', QToolbar)
  Vue.component('QToolbarTitle', QToolbarTitle)
  Vue.component('QInput', QInput)
  Vue.component('QField', QField)
  Vue.component('QDatetime', QDatetime)
  Vue.component('QCard', QCard)
  Vue.component('QCardMedia', QCardMedia)
  Vue.component('QCardSeparator', QCardSeparator)
  Vue.component('QCardMain', QCardMain)
  Vue.component('QCardTitle', QCardTitle)
  Vue.component('QCollapsible', QCollapsible)
  Vue.component('QAjaxBar', QAjaxBar)
  Vue.component('QTransition', QTransition)
  Vue.component('QSideLink', QSideLink)
  Vue.component('QScrollArea', QScrollArea)
  Vue.component('QItemSide', QItemSide)
  Vue.component('QItemTile', QItemTile)
  Vue.component('QItemMain', QItemMain)
  Vue.component('QItemSeparator', QItemSeparator)
  Vue.component('QLayout', QLayout)
  Vue.component('QSpinnerMat', QSpinnerMat)
  Vue.component('QSpinner', QSpinner)
  Vue.component('QTabs', QTabs)
  Vue.component('QTabPane', QTabPane)
  Vue.component('QRouteTab', QRouteTab)
  Vue.component('QInfiniteScroll', QInfiniteScroll)
  Vue.component('QSearch', QSearch)
  Vue.component('FormButton', FormButton)
  Vue.component('BackToTopButton', BackToTopButton)
  Vue.component('Toolbar', Toolbar)
  Vue.component('Tabs', Tabs)
  Vue.component('SideBar', SideBar)
}

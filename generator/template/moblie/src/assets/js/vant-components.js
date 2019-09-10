import Vue from 'vue'
import {
  Icon, Button, Cell, Popup, Checkbox, CheckboxGroup, DatetimePicker,
  Field, Picker, RadioGroup, Radio, Search, Slider, Stepper, Switch,
  SwitchCell, Uploader, ActionSheet, Dialog, Loading, CellGroup,
  Swipe, SwipeItem, NavBar, Tab, Tabs, Tag
} from 'vant'

export default {
  install () {
    Vue.use(Icon).use(Button).use(Cell).use(Popup).use(Checkbox).use(CheckboxGroup)
      .use(DatetimePicker).use(Field).use(Picker).use(RadioGroup).use(Radio)
      .use(Search).use(Slider).use(Stepper).use(Switch).use(SwitchCell)
      .use(Uploader).use(ActionSheet).use(Dialog).use(Loading).use(CellGroup)
      .use(Swipe).use(SwipeItem).use(NavBar).use(Tab).use(Tabs).use(Tag);
  }
}

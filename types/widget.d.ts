declare type WidgetStore = {
  load: boolean,
  success: boolean,
  Widget : Widget
}

declare type Widget = {
  direction: string,
  duration: string, //number might work2 but it will be css so...
  isProminent: boolean, // is fullscreen?
  type: string, //alert, warning, success
  message: string //default is set in store
}
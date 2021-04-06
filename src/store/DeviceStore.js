import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._devices = [];
    this._deviceComments = []
    makeAutoObservable(this);
  }
  setDeviceComments(comments) {
    this._deviceComments = comments
  }
  setDevices(devices) {
    this._devices = devices;
  }
  get deviceComments() {
    return this._deviceComments
  }
  get devices() {
    return this._devices;
  }
}

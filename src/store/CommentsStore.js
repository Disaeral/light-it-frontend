import { makeAutoObservable } from "mobx";

export default class CommentsStore {
    constructor () {
        this._deviceComments = [];
          makeAutoObservable(this)
    }
    setDeviceComments(comments) {
        this._deviceComments = comments
    }
    get deviceComments() {
        return this._deviceComments
    }

}
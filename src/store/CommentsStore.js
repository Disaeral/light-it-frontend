import { makeAutoObservable } from "mobx";

export default class CommentsStore {
    constructor () {
        this._comments = [
            {
              id: 1,
              rate: 3,
              text: `Отзыв ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium
                    semper justo et commodo. In sed condimentum diam. Nulla maximus nunc
                    ac dui sodales ultrices. Curabitur cursus blandit tortor eget rutrum.
                    Sed nibh eros, pretium id interdum in, molestie tempor est. Etiam
                    lacinia dignissim ipsum, in condimentum lacus rhoncus quis.`,
              userId: 1,
              deviceId: 1,
            },
            {
              id: 2,
              rate: 4,
              text: `Отзыв ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium
                    semper justo et commodo. In sed condimentum diam. Nulla maximus nunc
                    ac dui sodales ultrices. Curabitur cursus blandit tortor eget rutrum.
                    Sed nibh eros, pretium id interdum in, molestie tempor est. Etiam
                    lacinia dignissim ipsum, in condimentum lacus rhoncus quis.`,
              userId: 2,
              deviceId: 3,
            },
            {
              id: 3,
              rate: 5,
              text: `Отзыв ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium
                    semper justo et commodo. In sed condimentum diam. Nulla maximus nunc
                    ac dui sodales ultrices. Curabitur cursus blandit tortor eget rutrum.
                    Sed nibh eros, pretium id interdum in, molestie tempor est. Etiam
                    lacinia dignissim ipsum, in condimentum lacus rhoncus quis.`,
              userId: 3,
              deviceId: 5,
            },
          ];
          makeAutoObservable(this)
    }
    setComments(comments) {
        this._comments = comments
    }
    get comments() {
        return this._comments
    }

}
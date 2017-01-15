(function (app) {
    let ViewBase = app.views.ViewBase;
    class ViewPostDetail extends ViewBase {
        constructor() {
            super();
            this.tpl = document.querySelector('#view-post-detail-tpl');
            this.container = document.querySelector('.view-posts-container');
            this.container.addEventListener('click', (event) => {
                if (event.target.className.includes('btn-back')) {
                    this.sendBackEvent();
                }
            })
        }

        sendBackEvent() {

        }

        sendAddCommentEvent(post){
            document.dispatchEvent(new CustomEvent('add-comment',{detail:post}));
        }

        preRender(post) {
            this.render(post, this.tpl.innerHTML, this.container);
            this.container
                .querySelector('.btn-add-comment')
                .addEventListener('click', () => {
                    this.sendAddCommentEvent(post);
                });
        }
    }

    app.views.ViewPostDetail = ViewPostDetail;
})(App);
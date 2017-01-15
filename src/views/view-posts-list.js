(function (app) {
    let ViewBase = app.views.ViewBase;
    class ViewPostsList extends ViewBase {
        constructor() {
            super();
            this.tpl = document.querySelector('#view-post-list-tpl');
            this.container = document.querySelector('.view-posts-container');
            this.container.addEventListener('click', (event) => {
                let el = event.target;
                let isRemoveBtn = el.className.includes('btn-remove');
                // let isMoreBtn = el.className.includes('btn-more');
                if (isRemoveBtn) {
                    let id = el.dataset.id;
                    this.sendRemoveEvent(parseInt(id));
                }
            });
        }

        sendRemoveEvent(id) {

            document.dispatchEvent(new CustomEvent('remove-post', {detail: id}));
        }

        preRender(data) {
            this.render(data, this.tpl.innerHTML, this.container);
        }
    }
    app.views.ViewPostsList = ViewPostsList;
})(App);
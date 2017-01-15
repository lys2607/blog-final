(function (app) {
    let ViewAddPostForm = app.views.ViewAddPostForm;
    let viewPostDetail = new app.views.ViewPostDetail();
    let Helpers = app.Helpers;
    let viewPostsList = new app.views.ViewPostsList();
    let Post = app.models.Post;
    let Comment = app.models.Comment;
    let postsService = new app.services.PostsService();
    class PostsController {
        constructor() {
            new ViewAddPostForm();

            this.fetchPosts();

            document.addEventListener('add-post', (data) => {
                let id = Helpers.getRandomId();
                let post = new Post(Object.assign(data.detail, {id}));
                postsService.addPost(post, this.fetchPosts.bind(PostsController));
            });
            document.addEventListener('remove-post', (data) => {
                let id = data.detail;
                postsService.removePost(id, this.fetchPosts.bind(PostsController));
            });
            window.addEventListener('hashchange', (event) => {
                let id = Helpers.getHash(event.newURL);
                if (id) {
                    this.getPostById(id);
                }
            });
            document.addEventListener('add-comment', (event) => {
                let post = new Post(event.detail);
                post.addComment(new Comment({msg:'hi'}));
                postsService.save(viewPostDetail.preRender(post));
            });
        }
        getPostById(id) {
            postsService.getById(id,viewPostDetail.preRender.bind(viewPostDetail));
        }

        fetchPosts() {
            postsService.fetch(viewPostsList.preRender.bind(viewPostsList));
        }
    }
    app.controllers.PostsController = PostsController;
})(App);
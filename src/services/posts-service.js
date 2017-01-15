(function (app) {
    class PostsService {
        constructor() {
            this.posts = []
        }

        fetch(callback) {
            this.posts = JSON.parse(localStorage.getItem('posts')) || [];
            callback({posts: this.posts});
        }

        addPost(post, callback) {
            this.posts.push(post);
            this.save();
            callback();
        }

        removePost(id, callback) {
            let wantedIndex = this.posts.findIndex((post) => {
                return post.id === id;
            });
            this.posts.splice(wantedIndex, 1);
            this.save();
            callback();
        }

        save(){
            localStorage.setItem('posts', JSON.stringify(this.posts));
        }

        getById(id, callback) {
            let post = this.posts.find((post) => {
                return post.id === parseInt(id);
            });
            callback(post);
        }
    }
    ;
    app.services.PostsService = PostsService;
})(App);
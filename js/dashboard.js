(function () {

    let lesPosts = document.querySelectorAll('main .post');

    for (let i = 0; i < lesPosts.length; i++) {
        post = lesPosts[i];
        post.addEventListener('click', function postClicked() {
            this.classList.toggle('active');
        })
    }


}());
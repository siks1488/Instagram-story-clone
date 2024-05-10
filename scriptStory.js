const buttonLike = document.querySelector(".fa-regular.fa-heart");
const like = document.querySelector(".like");

const pressLike = function(){
    buttonLike.classList.add("hidden");
    like.classList.remove("hidden");
}
const removeLike = function(){
    buttonLike.classList.remove("hidden");
    like.classList.add("hidden");
}

buttonLike.addEventListener("click",pressLike);
like.addEventListener("click",removeLike);
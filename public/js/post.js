const newCommentFormHandler = async (event) => {
    event.preventDefault();
    const postId = event.target.getAttribute("data-id");
    const description = document.querySelector("#description").value;
    
    // Send fetch request to add a new dish

    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({
        description,
        post_id: postId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the comment is added,
    if (response.ok) {
      document.location.replace(`/post/${postId}`);
    } else {
      alert('Failed to add comment');
    }
};

console.log(document.querySelector(".comment-form"));
document.querySelector(".comment-form").addEventListener("submit", newCommentFormHandler);

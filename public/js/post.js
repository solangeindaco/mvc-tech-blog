const newCommentFormHandler = async (event) => {
    event.preventDefault();
    const postId = event.target.getAttribute("data-id");
    const user_id = event.target.getAttribute("data-user");
    const description = document.querySelector("#description").value;
    
    // Send fetch request to add a new dish
    console.log(postId);
    console.log(user_id);
    console.log(description);
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({
        description,
        user_id,
        post_id: postId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the comment is added,
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add comment');
    }
};

console.log(document.querySelector(".comment-form"));
document.querySelector(".comment-form").addEventListener("submit", newCommentFormHandler);

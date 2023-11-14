const updateFormHandler = async (event) => {
    event.preventDefault();

      const id = event.target.getAttribute('data-id');
      const title = document.querySelector('#post-title').value.trim();
      const content = document.querySelector('#post-content').value.trim();

    console.log("ID:" + event.target.getAttribute('data-id'));
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const title = document.querySelector('#post-title').value.trim();
      const content = document.querySelector('#post-content').value.trim();

      console.log("ID:" + id);
      console.log("Title:" + title);
      console.log("Content:" + content);
  
      if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, content }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to update post');
        }
      }
    }
  };

  document
  .querySelector('.update-post-form')
  .addEventListener('submit', updateFormHandler);
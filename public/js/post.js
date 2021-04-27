// Add a post JS
const addPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_body = document.querySelector('input[name="post-body"]').value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

// Delete a Post JS
const delPostFormHandler = async (event) => {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      post_id: id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
};

// Edit a Post JS
const editFormHandler = (event) => {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_body = document.querySelector('input[name="post-body"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
  }

// Add
document
  .querySelector(".new-post-form")
  .addEventListener("submit", addPostFormHandler);

// Delete
document
  .querySelector(".delete-post-btn")
  .addEventListener("click", delPostFormHandler);

// Edit
document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editFormHandler);

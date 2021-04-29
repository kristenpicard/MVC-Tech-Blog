// Delete a Post JS
const delPostFormHandler = async (event) => {
  event.preventDefault();

  let URL = document.URL;
  let URL_array = URL.split("/");
  let id = URL_array[URL_array.length - 1];

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
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

// Delete
document
  .querySelector(".delete-post-btn")
  .addEventListener("click", delPostFormHandler);

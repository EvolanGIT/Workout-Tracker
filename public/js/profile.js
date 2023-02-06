const profile = async () => {
    // If successfully logged out, redirect to the login page
    document.location.replace('/profile');
  } 
document.querySelector('#profile').addEventListener('click', profile);

const deletePost = async () => {
  const postId = document.querySelector('#deletebutton').value
  console.log(postId)
  await fetch (`/api/posts/${postId}`, {
    method : 'DELETE' 
  })
  // document.location.replace('/')
}
document.querySelector ('#deletebutton').addEventListener('click', deletePost)
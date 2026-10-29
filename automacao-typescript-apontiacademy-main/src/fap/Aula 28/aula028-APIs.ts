const base_url = "https://jsonplaceholder.typicode.com";
//definindo contratos de tipo
type post = {
  userID: number;
  id?: number; //campo opcional
  title: string;
  body: string;
};
type comment = {
  postID: number;
  name: string;
  email: string;
  body: string;
};
//GET /post
async function listarPost() {
  console.log(`--- 1. GET /post---`);
  const rest = await fetch(`${base_url}/posts`);
  const dados: post[] = await rest.json();
  console.log(`status: ${rest.status}`);
  console.log(`lidos: ${dados.length} posts.\nEx: do primeiro`, dados[0].title);
}

//get /posts/1
async function buscarPorId(id: number) {
  console.log(`--- 1. GET /post/1/comment---`);
  const rest = await fetch(`${base_url}/posts/${id}`);
  const dados: post = await rest.json();
  console.log(`status: ${rest.status}`);
  console.log(`titulo do posts ${id}:`, dados.title);
}
async function listarcoment(postId: number) {
  console.log(`--- 1. GET /post/1/comment---`);
  const rest = await fetch(`${base_url}/posts/${postId}/comments`);
  const dados: comment[] = await rest.json();
  console.log(`status: ${rest.status}`);
  console.log(
    `o post ${postId} tem ${dados.length} comentarios.
ex: Email do primeiro comentario`,
    dados[0].email,
  );
}
async function chamarReqs() {
  listarPost();
  buscarPorId(1);
  listarcoment(1);
}
chamarReqs();

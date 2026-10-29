
import { test, expect } from "vitest";

const base_url = "https://jsonplaceholder.typicode.com";

test("metodo POST para criar um novo post", async () => {
  const res = await fetch(`${base_url}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 1,
      title: "meu novo post",
      body: "conteudo do meu novo post",
    }),
  }); 
  //testar requisiçao 
  expect(res.status).toBe(201);
  //testar se o retorno e um objeto JSON
  const dados = await res.json();
  expect(dados.title).toBe("meu novo post");
  expect(dados.body).toBe('conteudo do meu novo post');
});
test('metodo PUT para ATUALIZAR um post', async() => {
  const res = await fetch(`${base_url}/posts/1`,{
    method:'PUT',
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      userId: 1,
      title: "meu novo post",
      body: "conteudo do meu novo post",
  }),
   });
    expect(res.status).toBe(200);

});
test('metodo PATCH para ATUALIZAR um post', async() => {
  const res = await fetch(`${base_url}/posts/1`,{
    method:'PATCH',
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      userId: 1,
      title: "meu titulo atualizado",
    }),
  });
    expect(res.status).toBe(200);

  });
  test('metodo DELETE para ATUALIZAR um post', async() => {
  const res = await fetch(`${base_url}/posts/1`,{
    method:'DELETE',
    });
    expect(res.status).toBe(200);
  });
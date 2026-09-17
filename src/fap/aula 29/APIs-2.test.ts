
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

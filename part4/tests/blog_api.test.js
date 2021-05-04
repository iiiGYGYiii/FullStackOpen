const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const Blog = require("../models/blog");
const api = supertest(app);
const helper = require("./test_helper");

beforeEach(async()=>{
  await Blog.deleteMany({});
  await Promise.all(helper.initialBlogs.map(blog => new Blog(blog).save()));
});

describe("when are some blogs saved initially", () =>{
  test("all blogs are returned", async() =>{
    const response = await api.get("/api/blogs");
    expect(response.body).toHaveLength(helper.initialBlogs.length);
  });

  test("blogs are returned as JSON", async()=>{
    await api.get("/api/blogs")
      .expect(200)
      .expect("Content-Type",/application\/json/);
  });
});

describe("existence of properties", () =>{
  test("exists id", async() => {
    const response = await api.get("/api/blogs");
    expect(response.body[0].id).toBeDefined();
  });

  test("likes added when not specified", async() =>{
    const blogToAdd = {
      title: "Testing the likes prop.",
      author: "Me",
      "url": "midu.dev"
    };
    const blog = new Blog(blogToAdd);
    expect(blog.likes).toBe(0);
  });
});

describe("adding new blogs to the server", () =>{

  test("succeeds with valid data", async() =>{
    const blogToAdd = {
      title: "Testing the HTTP POST",
      author: "Me",
      url: "idk.idc/idgaf"
    };
  
    await api
      .post("/api/blogs")
      .send(blogToAdd)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    
    const response = await api.get("/api/blogs");
    expect(JSON.parse(response.text)).toHaveLength(helper.initialBlogs.length+1);
  });

  test("fails with error 400 if data is invalid", async () =>{
    const badBlog = {
      author: "Me",
      likes: 123
    };
    await api.post("/api/blogs").send(badBlog).expect(400);
  });  
});

describe("deleting a blog", () =>{
  test("succeeds with a status code 204", async() =>{
    const response = await api.get("/api/blogs");
    const id = response.body[0].id;
    await api.delete(`/api/blogs/${id}`).expect(204);
    const responseAfterDelete = await api.get("/api/blogs");
    expect(responseAfterDelete.body).toHaveLength(helper.initialBlogs.length-1);
  });
});

describe("updating a blog", () =>{
  test("succeeds with valid data", async() =>{
    const response = await api.get("/api/blogs");
    const id = response.body[0].id;
    const propsUpdating = {author: "Manfield Manfred"};
    await api.put(`/api/blogs/${id}`)
      .send(propsUpdating)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

afterAll(() =>{
  mongoose.connection.close();
});

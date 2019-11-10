import React from "react"
import Layout from "../components/layout"
import BlogCard from "../components/blog-card"
import SearchBar from "../components/search-bar"
import image from "../images/tb3.jpg"
import { H1 } from "../components/elements/H1"

//Temp variables
const post = "/post"
const title = "Post Title"
const intro =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "

//TODO:
// Component that fetches post given certain tag or criteria

const Blog = () => {
  return (
    <Layout>
      <SearchBar />
      <H1>LATEST BLOG POSTS</H1>
      <BlogCard title={title} intro={intro} link={post} thumbnail={image} />
      <BlogCard title={title} intro={intro} link={post} thumbnail={image} />
      <BlogCard title={title} intro={intro} link={post} thumbnail={image} />
      <BlogCard title={title} intro={intro} link={post} thumbnail={image} />
      <BlogCard title={title} intro={intro} link={post} thumbnail={image} />
      <BlogCard title={title} intro={intro} link={post} thumbnail={image} />
    </Layout>
  )
}

export default Blog

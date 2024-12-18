import React from "react";
import { useLocation } from "react-router-dom";
import BlogHeader from "../../Components/BlogHeader/BlogHeader";
import TagsShare from "../../Components/TagsShare/TagsShare";
import StartupCapital from "../../Components/BlogData/Blog1/Blog1";
import Blog2 from "../../Components/BlogData/Blog2/Blog2";
import Blog3 from "../../Components/BlogData/Blog3/Blog3";
import Blog4 from "../../Components/BlogData/Blog4/Blog4";
import Blog5 from "../../Components/BlogData/Blog5/Blog5";
import Blog6 from "../../Components/BlogData/Blog6/Blog6";
import Blog7 from "../../Components/BlogData/Blog7/Blog7";
import Blog8 from "../../Components/BlogData/Blog8/Blog8";
import Blog9 from "../../Components/BlogData/Blog9/Blog9";

export default function Blog() {
  const location = useLocation();
  const { title, image, componentId } = location.state || {};

  // Default components array
  const blogComponents = [
    <StartupCapital />,
    <Blog2 />,
    <Blog3 />,
    <Blog4 />,
    <Blog5 />,
    <Blog6 />,
    <Blog7 />,
    <Blog8 />,
    <Blog9 />,
  ];

  // Select the correct component based on `componentId`
  const selectedComponent = blogComponents[componentId - 1];

  return (
    <>
      <BlogHeader title={title} image={image} imageAlt={title} />
      <div>{selectedComponent}</div>
      <TagsShare />
    </>
  );
}

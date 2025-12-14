import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Hero } from "@/sections/Hero";
import { MainContent } from "@/sections/MainContent";

export const ObituaryPage = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    if (slug) document.title = `${slug.replace(/-/g, " ")} – Obituary`;
  }, [slug]);

  return (
    <>
      <Hero />
      <MainContent />
    </>
  );
};

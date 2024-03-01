import Image from "next/image";
import collage from "@/images/blogCollage.png";
import Link from "next/link";
import { sanityClient } from "@/sanity";
import { Post } from "@/typings";
import { useEffect, useState } from "react";

interface Props {
  // an array of posts
  posts: [Post];
}

const query =  `*[_type == "post"]{
  _id,
  title,
  slug,
  author  -> {
  name,
  image
              },
  description,
  mainImage,
  slug
}`;


export default function Home({ posts }: Props) {

  
  return (
    <main className="">

      <div className="flex justify-center">
          <Image 
          src={collage}
          alt="Sophiastic Living collage"
          width={400}
          height={400}
          />

</div>  

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">

        {/* {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border rounded-lg group cursor-pointer overflow-hidden">
              <img
                className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                alt=""
                src={urlFor(post.mainImage).url()!}
              />
              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <img 
                  className="h-12 w-12 rounded-full"
                  src={urlFor(post.author.image).url()!} alt="" 
                />
              </div>
            </div>
          </Link>
        ))} */}
      </div>
    </main>
  );
}

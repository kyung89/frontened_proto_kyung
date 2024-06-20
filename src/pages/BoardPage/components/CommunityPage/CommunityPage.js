import React, { useEffect, useState } from "react";
import BasicBoard from "../common/BasicBoard";
import axios from "axios";

// 기본 posts JSON 구조
// {"id":1,
//  "title":"게시글 제목 1",
//  "content":"게시글 내용 1",
//  "createdBy":"twobeercat",
//  "viewCount":0,
//  "category":"커뮤니티",
//  "postDate":"2024-06-20T09:35:24.556+00:00",
//  "updateDate":"2024-06-20T09:35:24.556+00:00"
//  }

export default function CommunityPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/posts")
      .then(function (response) {
        // 성공 핸들링
        setPosts(response.data);
        //console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .finally(function () {
        // 항상 실행되는 영역
      });
  }, []);
  return (
    <>
      {posts && (
        <BasicBoard
          category={"community"}
          title={"커뮤니티 게시판"}
          posts={posts}
        />
      )}
    </>
  );
}

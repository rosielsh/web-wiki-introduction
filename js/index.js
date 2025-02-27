// index.js
document.addEventListener("DOMContentLoaded", function () {
  // 댓글 등록 기능
  const commentForm = document.querySelector(".comment-writing-container form");
  const commentList = document.querySelector(".comment-list");
  const commentTextarea = commentForm.querySelector("textarea");
  const submitButton = commentForm.querySelector('button[type="button"]');

  submitButton.addEventListener("click", function () {
    const commentText = commentTextarea.value.trim();

    if (commentText) {
      // 새 댓글 아이템 생성
      const newComment = document.createElement("li");
      newComment.innerHTML = `
        <div class="comment-item">
          <div class="comment-author">
            <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
            <span>방문자</span>
          </div>
          <div class="comment-content">
            ${commentText}
          </div>
        </div>
      `;

      // 댓글 목록의 맨 위에 새 댓글 추가
      commentList.prepend(newComment);

      // 입력 필드 초기화
      commentTextarea.value = "";
    } else {
      alert("댓글 내용을 입력해주세요.");
    }
  });
});

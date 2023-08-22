function toggleLike(event) {
  event.currentTarget.parentElement.classList.toggle("liked");
}

function shareOnFacebook(event) {
  const articleUrl = encodeURIComponent(event.currentTarget.getAttribute("data-article"));
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`, '_blank');
}

function shareOnTwitter(event) {
  const articleUrl = encodeURIComponent(event.currentTarget.getAttribute("data-article"));
  window.open(`https://twitter.com/intent/tweet?url=${articleUrl}&text=Check%20out%20this%20article!`, '_blank');
}

function shareOnLinkedIn(event) {
  const articleUrl = encodeURIComponent(event.currentTarget.getAttribute("data-article"));
  window.open(`https://www.linkedin.com/shareArticle?url=${articleUrl}`, '_blank');
}

function shareOnInstagram(event) {
  const articleUrl = encodeURIComponent(event.currentTarget.getAttribute("data-article"));
  window.open(`https://www.instagram.com/share?url=${articleUrl}`, '_blank');
}

function shareOnWhatsApp(event) {
  const articleUrl = encodeURIComponent(event.currentTarget.getAttribute("data-article"));
  window.open(`https://wa.me/?text=${articleUrl}`, '_blank');
}

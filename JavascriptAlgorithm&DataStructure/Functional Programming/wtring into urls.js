function urlSlug(title) {
    return title.trim().split(/\s+/).join('-').toLowerCase();
  }
  
  // trim will remove white spaces
  console.log(urlSlug("Winter Is Coming"));  // winter-is-coming
  console.log(urlSlug(" Winter Is  Coming"));  // winter-is-coming
  console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));  // a-mind-needs-books-like-a-sword-needs-a-whetstone
  console.log(urlSlug("Hold The Door"));  // hold-the-door
  
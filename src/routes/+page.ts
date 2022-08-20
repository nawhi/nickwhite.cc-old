
export const load = (event) => {
  console.log({locals:event.locals})
  return {
    posts: event.locals.posts
  }
}

# Hi, I'm Mike Kang!

Hi I'm Mike (Ki Uk) Kang. Please check out my OMDB movie nomination project submission:

For a `Live Demo` click: [just-nominate](https://just-nominate.herokuapp.com/)

See the checklist of specifications below the sample picture!

![alt text](https://github.com/mikekang23/just-nominate/blob/master/public/screenshot.png)

### Tech specifications check list
- [x] Search results should come from OMDB's API
- [x] Each search result shows title, year of release, nominate button, and plot description
- [x] Updates to the search terms should update the result list (See Notes on implementation decisions)
- [x] Movies in search results can be added and removed from the nomination list.
- [x] Display a banner when the user has 5 nominations. (Purple banner implemented)

### Bells and Whistles - The extras
- [x] Many search queries for OMDB (and middle steps in between a finalized query string) have empty "N/A" result. I parsed this to make a more human friendly version showing, "Released year is unknown" instead of N/A. The same goes wit the plot.
- [x] Empty state image for non-existent movie posters added
- [x] Empty state for an empty nomination list added
- [x] Fade-in animation for adding items and for nomination list (empty state)
- [x] Already nominated movies have Nominate button marked as "Already Nominated"
- [x] Reaching the maximum of 5 nominations marks Nominate buttons as "Maximum Reached"

### Notes
While typing a movie title, the api calls will be made per key stroke. However,
since OMDB frequently returns empty responses, updating between a movie poster
and an empty state back-and-forth, over and over again, seemed like a jagged
experience. Thus, I decided to only update the movie results when a non-empty
response was given by OMDB for a better user experience. To be clear, the api
call is still being made on each input change.

Enjoy! ❤️

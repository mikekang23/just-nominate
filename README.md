# Hi, I'm Mike Kang!

Hi I'm Mike Kang. Please check out my OMDB movie nomination project submission: [just-nominate](https://just-nominate.herokuapp.com/)

![alt text](https://github.com/mikekang23/just-nominate/blob/master/public/screenshot.png)

### Notes
While typing a movie title, the api calls will be made per key stroke. However,
since OMDB frequently returns empty responses, updating between a movie poster
and an empty state back-and-forth, over and over again, seemed like a jagged
experience. Thus, I decided to only update the movie results when a non-empty
response was given by OMDB for a better user experience. To be clear, the api
call is still being made on each input change.

Enjoy!

# Personal Site

A four-page static site: About, Resume, The Croissant Index, and The Fancy Project. Plain HTML, CSS and a little JavaScript. No build step.

## Files

- `index.html` : About Me (this is the homepage)
- `resume.html` : Resume
- `croissant-index.html` : The Croissant Index (summary of the dissertation coda)
- `fancy-project.html` : The Fancy Project (case study layout)
- `styles.css` : all styling; colors live at the top under `:root`
- `script.js` : mobile menu, scroll fade-ins, table sorting

## Publish on GitHub Pages

1. Create a new repository on GitHub. Name it `yourusername.github.io` if you want the site at that address.
2. Upload all the files to the root of the repo (Add file > Upload files, then commit).
3. Go to Settings > Pages. Under "Build and deployment", choose "Deploy from a branch", pick `main` and `/ (root)`, then Save.
4. Wait a minute or two, then visit `https://yourusername.github.io`.

## Making it yours

- Your name, email and LinkedIn are filled in. The "Source on GitHub" button on The Fancy Project still points to `yourusername`, so update or remove it.
- Swap the portrait placeholder on the About page for an `<img src="photo.jpg" alt="...">` inside the `.portrait` div.
- `resume.pdf` is included for the Download PDF button. It contains your phone number, so remove that line from the PDF if you would rather not publish it.
- Change the palette by editing the variables at the top of `styles.css`.

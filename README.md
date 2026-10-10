# Angel G. Lugo Rodriguez Portfolio

A lightweight Jekyll portfolio with an aerospace mission-control visual system, dedicated PURE and Battle Bot case studies, responsive project galleries, and an official GitHub Pages Actions deployment workflow.

## Run locally

1. Install Ruby 3.1 or newer and Bundler.
2. Install dependencies:

   ```sh
   bundle install
   ```

3. Start the local server:

   ```sh
   bundle exec jekyll serve --livereload
   ```

4. Open `http://localhost:4000`.

## Deploy on GitHub Pages

1. Push this repository to GitHub using `main` as the default branch.
2. Open **Settings → Pages** in the GitHub repository.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` or run the workflow manually from the **Actions** tab.

The workflow in `.github/workflows/pages.yml` builds the Jekyll site and deploys the generated `_site` artifact.

## Update content

- Edit `index.md` for the home page.
- Edit `projects.md` for the project selector and the project include files in `_includes/` for case-study content.
- Edit `experience.md` for professional experience and education.
- Replace `assets/images/professional-photo.jpeg` to update the portrait.
- Edit `assets/css/main.css` to adjust the theme.
- Update `_config.yml` for site-wide metadata.


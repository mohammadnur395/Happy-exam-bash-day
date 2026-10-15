# Happy Bash Day 💚🐼

Green animated greeting page featuring a CSS panda holding bamboo, an animated speech bubble, and a daily day counter.

## Files
- `index.html` — page content
- `style.css` — design and animations
- `script.js` — automatic/manual day-number configuration
- `README.md` — setup guide

## Publish on GitHub Pages
1. Create a new **Public** GitHub repository (for example `happy-bash-day`).
2. Upload all four files directly into the repository root. Do not upload the ZIP itself as the only file.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, branch `main`, folder `/(root)`, and press **Save**.
5. Wait for the deployment to finish. The URL format is `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Change the day number

Open `script.js` and edit:

```js
const CONFIG = {
  START_DAY: 4,
  START_DATE: "2026-10-15",
  AUTO_COUNT: true
};
```

- **Automatic count for everyone:** leave `AUTO_COUNT: true`. The date in `START_DATE` will display the number in `START_DAY`; each following calendar day adds one.
- **Manual fixed number for everyone:** set `AUTO_COUNT: false` and choose `START_DAY`. For example, `START_DAY: 7` will always show Day 7.
- Commit the changes to GitHub. The public page will update after deployment.

There are intentionally no on-page settings controls, so visitors cannot change the counter themselves.

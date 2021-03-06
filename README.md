# micahel71 Personal website

[//]: # "[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=jcoelho93_personal-website&metric=alert_status)](https://sonarcloud.io/dashboard?id=jcoelho93_personal-website)"
[//]: # "[![Netlify Status](https://api.netlify.com/api/v1/badges/d32b64a2-9f48-4a26-b0d3-21cdf5548ec6/deploy-status)](https://app.netlify.com/sites/jcoelho93/deploys)"

This is my personal website built using ReactJS and Bulma as the CSS framework. [Live here](https://www.chalvatzis.de/michael-cv)

The personal information on the website is populated from a json file that follows the [JSON Resume](https://jsonresume.org/) open source standard.

## Customizing it

Feel free to fork this project and update it with your own information and style. Just update the ´src/resume.json´ with your personal information.

If you improve the app in any way a PR would be very apreciated ;)

## Build

1. Clone the repo:

   ```console
   > git clone https://github.com/micahel71/personal-website.git
   ```

1. Update the *resume.json* with your personal information (check [JSON Resume](https://jsonresume.org/))

1. Install dependencies and run build command:

   ```console
   > npm install
   > npm run build
   ```

   You can also test the app with a development server, just run:

   ```console
   > npm start
   ```

   A pdf export can be created based on pdf/pdf.js settings

   ```bash
   nohup npm start & sleep 10 && node pdf/pdf.js 
   ```

## Contributing

Feel free to fork this project and customize with your personal info. If you implement any nice features or improvements I'd really appreciate if you could open a PR to this project ;)

## License

MIT

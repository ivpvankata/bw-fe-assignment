# Senior UX/Frontend Developer Assignment

## Project Overview

This project involved recreating a Figma design as a responsive web page using modern front-end technologies. The primary objectives were to ensure design fidelity, accessibility, performance optimization, and cross-browser compatibility.

## Technologies Used

- **Next.js:** Used as the main framework for server-side rendering and static site generation.
- **React:** Utilized for building reusable UI components.
- **SCSS (Sass):** Employed for styling, allowing the use of variables, mixins, and nesting for cleaner CSS.
- **Vercel:** Used for deploying the application, leveraging its seamless integration with Next.js for optimal performance and ease of deployment.
- **Git:** Version control system for managing code changes and collaboration.
- **Vercel CLI:** For deploying the project from the command line.
- **Google Fonts:** For importing the Montserrat font used in the project.

## Project Structure

- **Components:**
  - `Title.js`
  - `Bonus.js`
  - `Rating.js`
  - `Image.js`
  - `Widget.js`
  - `WidgetList.js`
- **Data:**
  - `widgetsData.js`
- **Pages:**
  - `index.js`
  - `_app.js`
  - `_document.js`
- **Styles:**
  - `_variables.scss`
  - `_mixins.scss`
  - `_reset.scss`
  - `_fonts.scss`
  - `_base.scss`
  - `Title.module.scss`
  - `Bonus.module.scss`
  - `Rating.module.scss`
  - `Image.module.scss`
  - `Widget.module.scss`
  - `WidgetList.module.scss`

## Challenges Faced and Solutions

### Styling Consistency and Maintainability

- **Challenge:** Managing consistent styling across various components while keeping the CSS modular and maintainable.
- **Solution:** Utilized SCSS for modular styling, creating a `_variables.scss` file for centralized variables and `_mixins.scss` for reusable mixins. Imported these globally to ensure consistency.

### Breakpoint Management

- **Challenge:** Ensuring the web page is responsive across different device sizes.
- **Solution:** Defined breakpoints in `_variables.scss` and created mixins in `_mixins.scss` to handle media queries. This approach ensured a consistent responsive design across the application.

### Accessibility

- **Challenge:** Ensuring the web page meets WCAG guidelines.
- **Solution:** Used ARIA roles and attributes where necessary, and ensured that all interactive elements were accessible via keyboard and screen readers.

### Performance Optimization

- **Challenge:** Optimizing the web page for performance.
- **Solution:** Leveraged Next.js for server-side rendering and static site generation, which significantly improved the page load time. Used Vercel’s optimization features for further performance enhancements.

### Cross-Browser Compatibility

- **Challenge:** Ensuring the web page works seamlessly across different browsers.
- **Solution:** Tested the web page on multiple browsers (Chrome, Firefox, Safari, Edge) and made necessary adjustments to styles and scripts to ensure compatibility.

### SEO and Metadata

- **Challenge:** Ensuring that the document has a title and is SEO-friendly.
- **Solution:** Used `next/head` in individual pages to manage dynamic head content, including the title and meta descriptions, and used `_document.js` to set static properties like the `lang` attribute on the `<html>` tag.

## Deployment

- **Source Code:** [GitHub Repository](https://github.com/ivpvankata/bw-fe-assignment)
- **Live Demo:** [Vercel Live Demo](https://casino-widgets.vercel.app/)

The project was deployed on Vercel, which provided a seamless and efficient deployment process. The automatic optimization and continuous deployment features of Vercel ensured that the latest changes were always reflected on the live site.

## Conclusion

This project successfully recreated the Figma design into a functional, responsive web page using Next.js, React, and SCSS. The deployment on Vercel ensures that the application is performant and always up-to-date with the latest changes. The challenges faced during the development were effectively addressed, resulting in a high-quality, accessible, and performant web application.

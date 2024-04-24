# How many days until \_\_\_ ?

**Days Until** is built with [Astro](https://astro.build/), [TailwindCSS](https://tailwindcss.com/), and [DaisyUI](https://daisyui.com/). This project keeps track of the days until various seasonal events and holidays worldwide.

Live Site: https://days-until.netlify.app/

## Features

- **Dynamic Event Listings**: Displays upcoming seasons and global holidays with countdowns.
- **Responsive Design**: Fully responsive interface that adapts to different device sizes.
- **Customizable Themes**: Utilize DaisyUI to switch between multiple color themes.
- **International Support**: Includes a diverse range of holidays relevant globally or in specific countries.

## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn (for managing dependencies)

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/fm-anderson/days-until.git
cd days-until
```

2. Install the required dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Visit http://localhost:4321 in your browser to access the application.

```bash
http://localhost:4321
```

6. To build the project for production:

```bash
npm run build
```

## Contributing

Contributions are welcome! I especially encourage contributions that expand the [holiday database](https://github.com/fm-anderson/days-until/blob/main/src/utils/db/holidays.json) to include local holidays from different regions and countries. If you have a holiday that is not currently listed and you'd like to see it in Days Until, please submit a pull request with the details.

### How to Contribute

1. Fork the repository.
2. Create a new branch `git checkout -b holiday/your-holiday`.
3. Make your changes and add them `git add`.
4. Commit your changes `git commit -m "add some holiday from my country"`.
5. Push to the branch `git push origin holiday/your-holiday`.
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/fm-anderson/days-until/blob/main/LICENSE) file for details.

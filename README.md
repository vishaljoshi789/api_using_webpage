
# Amazing Contents

This project is a website that showcases interesting facts and content fetched from various APIs. The website consists of a main landing page and two sub-pages: "Amazing Numbers" and "NASA".

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [APIs Used](#apis-used)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Home Page**: A landing page with links to the "Amazing Numbers" and "NASA" pages. It features an engaging auto-typing effect in the footer.
- **Amazing Numbers**: A page that displays interesting facts about numbers. You can search for a specific number to get its fact or see a random collection of facts on page load.
- **NASA**: A page that showcases the Astronomy Picture of the Day (APOD) from NASA's API. It displays the image, title, and a collapsible explanation.
- **Responsive Design**: The website is built with Bootstrap 5, ensuring a responsive and mobile-friendly layout.
- **Dynamic Content**: Content on the sub-pages is dynamically fetched from external APIs using JavaScript.


- `index.html`: The main landing page of the website.
- `css/style.css`: Contains custom CSS for styling the website.
- `htmls/`: Directory for the sub-pages.
- `js/`: Directory for all the JavaScript files.
  - `amazingnumber.js`: Handles fetching and displaying facts from the Numbers API.
  - `app.js`: Manages the auto-typing animation on the home page.
  - `nasa.js`: Fetches and displays the Astronomy Picture of the Day from the NASA API.
- `img/`: Directory for all the images and icons used on the website.

## APIs Used

- **Numbers API**: Used in `amazingnumber.js` to fetch interesting facts about numbers. The API endpoint is `http://numbersapi.com/`.
- **NASA API**: Used in `nasa.js` to get the Astronomy Picture of the Day. The API endpoint is `https://api.nasa.gov/planetary/apod`. **Note**: The API key used in the code is a public key, but for production, you should use your own API key.

## Technologies

- **HTML5**: For the structure of the web pages.
- **CSS3**: For styling, including custom layouts and animations.
- **JavaScript (ES6+)**: For fetching data from APIs and handling dynamic content.
- **Bootstrap 5**: A popular CSS framework used for responsive design and components like the navigation bar, cards, and accordions.

## Installation

1.  **Clone the repository**:
    ```sh
    git clone [https://github.com/vishaljoshi789/api_using_webpage.git](https://github.com/vishaljoshi789/api_using_webpage.git)
    ```
2.  **Navigate to the project directory**:
    ```sh
    cd vishaljoshi789-api_using_webpage
    ```

## Usage

Simply open the `index.html` file in your web browser to view the website. All dependencies are included via CDN links for Bootstrap, so no further installation is required.

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

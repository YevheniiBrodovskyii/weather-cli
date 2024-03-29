import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed(" ERROR ") + " " + error);
};

const printSuccess = (success) => {
  console.log(chalk.bgGreen(" SUCCESS ") + " " + success);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(" HELP ")}
        Without parameters - print weather
        -s [CITY] for passing city
        -h for view documentation
        -t [API_KEY] for save token
        `
  );
};

const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.bgGreen(" WEATHER ")} Weather at the city ${res.name}
        ${icon}  ${res.weather[0].description}
        Temperature: ${res.main.temp} (feel like ${res.main.feels_like})
        Humidity: ${res.main.humidity} %
        Wind: ${res.wind.speed}
        `
  );
};

export { printError, printSuccess, printHelp, printWeather };

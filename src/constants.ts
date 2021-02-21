const {
  API_DESCRIPTION = "The Movie API",
  API_DOCUMENTATION_PATH = "api",
  API_TITLE = "Movies",
  API_VERSION = "1.0",
  DATABASE_HOST = "localhost",
  DATABASE_PORT = 3306,
  DATABASE_USERNAME = "test",
  DATABASE_PASSWORD = "test",
  DATABASE_NAME = "movies",
  DEFAULT_PAGE = 1,
  DEFAULT_PER_PAGE = 50,
  MAXIMUM_PER_PAGE = 200,
  SERVER_PORT = 3000,
} = process.env;

export {
  API_DESCRIPTION,
  API_DOCUMENTATION_PATH,
  API_TITLE,
  API_VERSION,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DEFAULT_PAGE,
  DEFAULT_PER_PAGE,
  MAXIMUM_PER_PAGE,
  SERVER_PORT,
};

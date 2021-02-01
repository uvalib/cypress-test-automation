#
# build the target container
#
FROM cypress/included:3.3.0

# Specify home 
ENV APP_HOME /virgo4-cypress
WORKDIR $APP_HOME

# Create necessary directories
RUN mkdir -p $APP_HOME/cypress/integration/

# copy the test files
COPY cypress/integration/*.js $APP_HOME/cypress/integration/
COPY cypress.json $APP_HOME/

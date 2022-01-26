#
# build the target container
#
FROM cypress/included:9.1.1

# temp only
#ENTRYPOINT ["bash"]

# Specify home 
ENV APP_HOME /virgo4-cypress
WORKDIR $APP_HOME

# Create necessary directories
RUN mkdir -p $APP_HOME/cypress/integration/

# copy the test files
COPY cypress/integration/*.js $APP_HOME/cypress/integration/
COPY cypress.json $APP_HOME/

#
# end of file
#

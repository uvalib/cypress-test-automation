#
# build the target container
#
FROM public.ecr.aws/cypress-io/cypress/included:13.13.1

# Specify home 
ENV APP_HOME=/cypress-test-automation
WORKDIR $APP_HOME

# Create necessary directories
RUN mkdir -p $APP_HOME/cypress/e2e/
RUN mkdir -p $APP_HOME/cypress/support/
RUN mkdir -p $APP_HOME/cypress/plugins/

# copy the needed cypress files
COPY cypress/support/*.js $APP_HOME/cypress/support/
COPY cypress/plugins/*.js $APP_HOME/cypress/plugins/
COPY cypress.config.js $APP_HOME/

# copy the test files
COPY cypress/e2e/*.js $APP_HOME/cypress/e2e/

# temp only
#ENTRYPOINT ["bash"]

#
# end of file
#

ARG VARIANT="jammy"

FROM mcr.microsoft.com/devcontainers/base:${VARIANT}

ARG NODE_VERSIONS="lts latest"
ARG NPM_VERSIONS="latest"

SHELL ["/bin/bash", "-c"]

ENV BASH_ENV ~/.bashrc
ENV VOLTA_HOME /root/.volta
ENV PATH $VOLTA_HOME/bin:$PATH

# Install Volta
RUN curl https://get.volta.sh | bash

RUN echo node@${NODE_VERSIONS// / node@}

# Fetch Node.js for version specified in NODE_VERSIONS
RUN volta fetch node@${NODE_VERSIONS// / node@}

# Configure Volta to use the first version specified in NODE_VERSIONS as default
RUN volta install node@${NODE_VERSIONS%% *}

# Fetch NPM for version specified in NPM_VERSIONS
RUN volta fetch npm@${NPM_VERSIONS// / npm@}

# Configure Volta to use the first version specified in NPM_VERSIONS as default
RUN volta install npm@${NPM_VERSIONS%% *}

# Install Vite, eslint, prettier and typescript
RUN volta install vite eslint prettier typescript

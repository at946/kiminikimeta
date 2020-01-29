FROM node:13.7.0-stretch
ENV HOME="/app"
WORKDIR $HOME
COPY . $HOME
EXPOSE 3000
CMD ["node", "app.js"]

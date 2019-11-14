FROM node:latest
ADD . /prod
WORKDIR /prod
RUN yarn && yarn global add typescript && tsc --build tsconfig.json
# Looks like tsc need a workaround for docker, if your run `yarn build`, it'll not find tsc.
CMD echo "Host port 80 is forwarding now!\nPlease check on http://127.0.0.1:80 after APP start :P" && yarn start
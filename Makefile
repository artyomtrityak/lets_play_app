all: eslint flow

eslint:
	node_modules/.bin/eslint *.js app/**.js

flow:
	node_modules/.bin/flow status
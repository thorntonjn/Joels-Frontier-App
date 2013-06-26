
install: .env node_modules

ifeq (, ${PORT})
	port := 
else
	port := -p ${PORT}
endif

serve: .env node_modules
	foreman start ${port}

.env: node_modules
	@cake env:setup

node_modules: package.json
	@npm install

.PHONY: install serve

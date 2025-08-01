all:  
	git ls-files | grep -e "\.tsx\$$" | xargs npx eslint --fix
	git ls-files | grep -e "\.tsx\$$" | xargs npx prettier --write

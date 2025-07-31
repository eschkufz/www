#!/bin/sh

node() {
	FILE=`mktemp XXXXX.html`
	wget $1 -O $FILE 2> /dev/null

	NAME=`cat $FILE | grep "<\/h2>" | sed 's/\([^<]*\).*/\1/'`
	#echo "->"$NAME"<-"

	QUERY="grep \""$NAME"\" visited.txt"
	EXISTS=`eval $QUERY`
	if [ "$EXISTS" != "" ]
	then
		return
	fi
	echo $NAME" " >> visited.txt

	LOC=`grep "#006633" $FILE | sed 's/[^>]*>\s*\([^<]*\).*/\1/'`
	GRAD=`grep "#006633" $FILE | sed 's/[^>]*>[^>]*>\s*\([^<]*\).*/\1/'`

	echo ",{" >> temp.json
	echo "\"name\":\""$NAME"\"," >> temp.json
	echo "\"grad\": \""$GRAD"\"," >> temp.json
	echo "\"location\": \""$LOC"\"," >> temp.json
	echo "\"parents\": [" >> temp.json

	local itr=0
	for TITLE in "Advisor:" "Advisor 1:" "Advisor 2:" "Advisor 3:"
	do
		QUERY="grep \""$TITLE"\" "$FILE
		eval $QUERY | while read -r LINE
		do
			echo $LINE > line.txt
			QUERY="cat line.txt | sed 's/.*"$TITLE"[^<]*<a href=\"\([^\"]*\).*/\1/'"
			URL=`eval $QUERY`
			URL="http://genealogy.math.ndsu.nodak.edu/"$URL
			rm -f line.txt

			#echo $LINE
			#echo $QUERY
			#echo $URL

			node $URL 
		done
	done

	echo "]" >> temp.json
	echo "}" >> temp.json
}

fix_comma() {
	cat temp.json | sed '1s/.*/\{/' | tr -d '\n' | sed 's/\[\s*,/\[/g' | python -mjson.tool > out.json
}

rm -f visited.txt
touch visited.txt

# Change this URL to construct a different pedigree
node http://genealogy.math.ndsu.nodak.edu/id.php?id=13409
fix_comma

rm -f visited.txt *.html temp.json

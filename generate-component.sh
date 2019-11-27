FILE_NAME="";
FILE_PATH="./src";

while getopts f: option
do
case "${option}"
in
f) FILE_NAME=${OPTARG};;
esac
done

CREATED_DIR=$FILE_NAME-component
TSX_FILE=$FILE_PATH/$CREATED_DIR/$CREATED_DIR.tsx
SCSS_FILE=$FILE_PATH/$CREATED_DIR/$CREATED_DIR.scss

mkdir $FILE_PATH/$CREATED_DIR
touch $TSX_FILE
touch $SCSS_FILE

CLASS_NAME="";
IFS='-'
read -ra ADDR <<< "$CREATED_DIR"
for i in "${ADDR[@]}"; do
    CLASS_NAME+="${i^}"
done
IFS=' '

echo "import React, { Component } from 'react';" >> $TSX_FILE
echo "import './"$CREATED_DIR".scss';" >> $TSX_FILE
echo "" >> $TSX_FILE
echo "export class "$CLASS_NAME" extends Component<{}> {" >> $TSX_FILE
echo "    render() {" >> $TSX_FILE
echo "        return <div>" >> $TSX_FILE
echo "            <p>This is about-component </p>" >> $TSX_FILE
echo "        </div>" >> $TSX_FILE
echo "    }" >> $TSX_FILE
echo "}" >> $TSX_FILE
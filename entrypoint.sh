#!/bin/sh

# Replace env vars in JavaScript files
echo "Replacing env vars in JS"
for file in /usr/share/nginx/html/js/app.*.js;
do
  echo "Processing $file ...";

  # Use the existing JS file as template
  if [ ! -f $file.tmpl.js ]; then
    cp $file $file.tmpl.js
  fi

  envsubst '$VUE_APP_APIKEY,$VUE_APP_AUTH_DOMAIN,$VUE_APP_PROJECT_ID, $VUE_APP_STORAGE_BUCKET, $VUE_APP_MESSAGING_SENDER_ID, $VUE_APP_APP_ID' < $file.tmpl.js > $file
done

echo "Starting Nginx"
nginx -g 'daemon off;'